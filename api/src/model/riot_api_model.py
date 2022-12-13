from enum import Enum

class Region(Enum):
    BR = "https://br1.api.riotgames.com/"

class LOL_Endpoint(Enum):
    SUMMONER_INFO = "lol/summoner/v4/summoners/by-name/"
    ACTIVE_GAME = "lol/spectator/v4/active-games/by-summoner/"

class DDRAGON_Endpoint(Enum):
    CHAMPIONS = "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json"
    CHAMPION_IMAGE = "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/"
