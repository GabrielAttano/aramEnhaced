import { useState } from "react";

import * as colors from '../../config/colors'
import axios from "../../services/axios";
import ChampionCard from "../../components/ChampionCard";
import ChampionsTable from "../../components/ChampionsTable";
import * as styled from "./styled";

function Home() {
    const [isDarkTheme, setTheme] = useState(true);
    const [summonerName, setSummonerName] = useState("");
    
    const [gamemode, setGamemode] = useState("");
    const [participants, setParticipants] = useState([]);
    const [blueTeam, setBlueTeam] = useState([]);
    const [redTeam, setRedTeam] = useState([]);
    
    const [showParticipants, setShowParticipants] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.get('/active_game/'+summonerName);
        if (response.status === 200) {
            const data = response.data;
            if ("status_code" in data) {
                if (data.status_code === 404) {
                    console.log("Não foi possível encontrar um jogo ativo");
                }    
            }
            
            const blueTeam = data.participants.slice(0, 5);
            const redTeam = data.participants.slice(5);

            setGamemode(data.gamemode);
            setParticipants(data.participants);
            setBlueTeam(blueTeam);
            setRedTeam(redTeam);
            setShowParticipants(true);
        


        } else {
            console.log(response);
        }
    };

    const handleChange = (e) => {
        setSummonerName(e.target.value);
    };

    return (
        <>
            <styled.Container isDarkTheme={isDarkTheme} hide={showParticipants}>
                <div>
                    <styled.H1 isDarkTheme={isDarkTheme}>
                        {!showParticipants && "Search a Summoner name in an active ARAM game to check champion changes."}
                    </styled.H1>
                </div>
                <styled.inputContainer>
                    <input type={"text"} placeholder={"Summoner name"} onChange={handleChange} onSubmit={handleClick}/>
                    <styled.Button type="button" onClick={handleClick}>Search</styled.Button>
                </styled.inputContainer>
            </styled.Container>
            <styled.SecondaryContainer showContainer={showParticipants}>
                <styled.TeamContainer bgColor={"#00008B"}>
                    {blueTeam.map((participant) => (
                        <ChampionCard
                            summonerName={participant.summoner_name} 
                            championInfo={participant.champion_info}
                        />
                    ))}
                </styled.TeamContainer>
                <styled.TeamContainer bgColor={"#8b0000"}>
                {redTeam.map((participant) => (
                        <ChampionCard
                            summonerName={participant.summoner_name} 
                            championInfo={participant.champion_info}
                        />
                    ))}
                </styled.TeamContainer>
                {/* <ChampionsTable redTeam={redTeam} blueTeam={blueTeam}/> */}
            </styled.SecondaryContainer>
        </>
    );
};

export default Home;