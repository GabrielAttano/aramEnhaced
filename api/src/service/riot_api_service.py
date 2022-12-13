import requests
from fastapi import HTTPException
import json

from repository.schemas.riot_api_schemas import parseSummoner, parseActiveGame, ChampionSchema, ActiveGameSchema
from model.riot_api_model import Region, LOL_Endpoint, DDRAGON_Endpoint
from championChangesUpdater import get_champion_changes_raw, get_champion_changes

class RiotApiCaller:
    
    def _get_champions_by_id(self, id: list):
        url = DDRAGON_Endpoint.CHAMPIONS.value
        response = requests.get(url)
        if response.status_code == 200:
            champions = response.json()["data"]
        else:
            return HTTPException(500, detail="failed to get champions from ddragon")
        
        result = [""] * len(id)
        champion_changes = get_champion_changes_raw()
        for champion in champions:
            champion_key = int(champions[champion]["key"])
            changes = get_champion_changes(champion, champion_changes)
            if changes is None:
                changes = {""}
            if champion_key in id:
                result[id.index(champion_key)] = ChampionSchema(
                    champion_name=champion,
                    id=champion_key,
                    image=DDRAGON_Endpoint.CHAMPION_IMAGE.value+champions[champion]["image"]["full"],
                    title=champions[champion]["title"],
                    changes=changes
                )
        
        return result

    def get_summoner_info(self, summoner_name: str, region: Region, api_key: str):

        url = region.value + LOL_Endpoint.SUMMONER_INFO.value + summoner_name
        URL_key = {"api_key": api_key}
        print(url)
        response = requests.get(url, params=URL_key)
        if response.status_code == 200:
            return parseSummoner(response.json())
        else:
            if response.status_code == 403:
                return HTTPException(403, detail="Forbidden")   
            return HTTPException(404, detail="Summoner not found")
            
    def get_default_active_game(self, ):
        f = open("default_response_active_game.json");
        data = json.load(f)
        f.close()
        return data

    def get_active_game_data(self, summoner_id: str, region: Region, api_key: str, summoner_name = ""):
        if summoner_name:
            try:
                summoner = self.get_summoner_info(summoner_name, region, api_key)
                summoner_id = summoner.id
            except:
                return summoner
            

        url = region.value + LOL_Endpoint.ACTIVE_GAME.value + summoner_id

        response = requests.get(url, params={"api_key": api_key})
        if response.status_code == 200:
            active_game = parseActiveGame(response.json())
            champions = self._parse_champions(active_game)
            for i in range (len(champions)):
                active_game.participants[i]["champion_info"] = champions[i]
            return active_game
        else:
            if response.status_code == 403:
                return HTTPException(403, detail="Forbidden")   
            return HTTPException(404, detail="No active game found")

    def _parse_champions(self, active_game: ActiveGameSchema):
        champion_id = list()
        for participant in active_game.participants:
            champion_id.append(participant["champion_id"])
        return(self._get_champions_by_id(champion_id))

        

# def get_default_active_game_data():
#     f = open("active_game.json")
#     data = json.load(f)
#     f.close()
#     return data

# caller = RiotApiCaller()
# try:
#     response = caller.get_active_game_data("", Region.BR, "RGAPI-4613a5af-72f0-4720-8bd4-46aa7344bccd", "Pierce the Vayne")
#     print(response)
# except:
#     print(response.detail)

