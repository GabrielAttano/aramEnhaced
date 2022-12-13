import * as styled from './styled';

function ChampionsTable({ blueTeam, redTeam }){

    const parseParticipant = (participant) => {
        const {champion_name: championName, title: championTitle, image: championImageURL, changes} = participant.champion_info;
        const {damage_dealt = "", damage_received = "", healing_done = "", other_effects = ""} = changes;
        return (
            <tr>
                <td>
                    <div>
                        <img src={championImageURL} width={32} height={32}/>
                    </div>
                </td>
                <td>{championName}</td>
                <td>{damage_dealt}</td>
                <td>{damage_received}</td>
                <td>{healing_done}</td>
                <td>{other_effects}</td>
            </tr>
        )
    
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Champion</th>
                        <th>Damage Dealt</th>
                        <th>Damage Received</th>
                        <th>Damage Dealt</th>
                        <th>Healing Done</th>
                        <th>Other effects</th>
                    </tr>
                </thead>
                <tbody>
                    {blueTeam.map((participant) => (
                        parseParticipant(participant)
                    ))}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Champion</th>
                        <th>Damage Dealt</th>
                        <th>Damage Received</th>
                        <th>Damage Dealt</th>
                        <th>Healing Done</th>
                        <th>Other effects</th>
                    </tr>
                </thead>
                <tbody>
                    {redTeam.map((participant) => (
                        parseParticipant(participant)
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default ChampionsTable;
