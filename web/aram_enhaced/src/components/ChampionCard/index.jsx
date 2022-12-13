import PropTypes from 'prop-types';

import * as colors from "../../config/colors";
import * as styled from './styled';

function ChampionCard({ summonerName, championInfo }) {
    const {champion_name: championName, title: championTitle, image: championImageURL, changes} = championInfo;

    const parse_changes = (changes) => {
        const parsed_changes = [];
        if (Object.keys(changes).length === 0) {
            return parsed_changes;
        }

        let {damage_dealt, damage_received, other_effects} = changes;
        if (damage_dealt !== "") {
            parsed_changes.push({
                change: `Deals ${damage_dealt} damage.`,
                type: (parseInt(damage_dealt) > 0) ? "buff" : "nerf"
            });
        }
        if (damage_received !== "") {
            parsed_changes.push({
                change: `Receives ${damage_received} damage.`,
                type: (parseInt(damage_received) < 0) ? "buff" : "nerf"
            });
        }
        if (other_effects !== "none") {
            for (const effect of other_effects) {
                const {type, skill, effect: change} = effect;
                if (skill) {
                    parsed_changes.push({
                        change: `${skill}: ${change}`,
                        type: type,
                    });
                } else {
                    parsed_changes.push({
                        change: change,
                        type: type,
                    });
                }
            }
        }

        return parsed_changes;
    }


    const get_color_from_type = (type) => {
        if (type === "buff") return "#228B22";
        if (type === "nerf") return "#B22222";
        if (type === "none") return "#808080";
        if (type === "new_effect") return "#4682B4";
        return colors.gray;
    }

    return (
                    <styled.ChampionContainer>
                        <styled.ChampionInfoContainer>
                            <div>
                                <img src={championImageURL} width={62} height={62}/>
                            </div>
                            <styled.ChampionTitleContainer>
                                <styled.ChampionName>
                                    {championName}
                                </styled.ChampionName>
                                <styled.ChampionTitle>
                                    {championTitle}
                                </styled.ChampionTitle>
                            </styled.ChampionTitleContainer>
                        </styled.ChampionInfoContainer>
                        <styled.ChampionChangesContainer>
                            {parse_changes(changes).map((change) => (
                                <styled.ChampionChanges bg_color={get_color_from_type(change.type)} >
                                    {change.change}
                                </styled.ChampionChanges>
                            ))}
                        </styled.ChampionChangesContainer>
                    </styled.ChampionContainer>
    );
}


export default ChampionCard;