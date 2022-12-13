from fastapi import APIRouter

from model.riot_api_model import Region
from service.riot_api_service import RiotApiCaller

riot_api_router = APIRouter()
caller = RiotApiCaller()

@riot_api_router.get('/active_game/{summoner_name}')
def get_active_game(summoner_name: str):
    if summoner_name == "@TEST_RESPONSE":
        return caller.get_default_active_game()
    return caller.get_active_game_data("", Region.BR, "", summoner_name)