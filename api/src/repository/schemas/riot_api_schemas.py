from pydantic import BaseModel

from service.util import remove_special_characters, strip_accents

class SummonerSchema(BaseModel):
    name: str
    level: int
    id: str

class ActiveGameSchema(BaseModel):
    gamemode: str
    participants: list

class ChampionSchema(BaseModel):
    champion_name: str
    title: str
    id: int
    image: str
    changes: dict

def parseSummoner(summoner: dict):
    return SummonerSchema(
        name=summoner["name"],
        level=summoner["summonerLevel"],
        id=summoner["id"]
    )

def parseActiveGame(active_game: dict):
    participants = _parseParticipants(active_game["participants"])
    return ActiveGameSchema(
        gamemode=active_game["gameMode"],
        participants=participants
    )

def _parseParticipants(participants: dict):
    blue_team = [
        [remove_special_characters(strip_accents(x["summonerName"])), x["championId"]] 
        for x in participants 
        if x["teamId"] == 100
    ]
    red_team = [
        [remove_special_characters(strip_accents(x["summonerName"])), x["championId"]] 
        for x in participants 
        if x["teamId"] == 200
    ]

    participants = blue_team + red_team
    parsed_participants = list()
    for participant in participants:
        parsed_participants.append({"summoner_name": participant[0], "champion_id": participant[1]})

    return parsed_participants