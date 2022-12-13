import { useState } from "react";
import * as styled from "./styled";

import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import * as Colors from '../../config/colors';

function Header() {
    const [isDarkTheme, setTheme] = useState(true);


    const handleClick = (e) => {
        e.preventDefault();
        setTheme(!isDarkTheme);
        console.log(isDarkTheme);
    };

    return (
        <styled.Container>
            <styled.H2>ARAM Enhaced</styled.H2>
            <styled.Element>
                <button type="button" onClick={handleClick}>
                    {isDarkTheme ? <FaRegSun color={Colors.PrimaryButtonColor} size={32}/> : <FaRegMoon color={Colors.PrimaryButtonColor} size={32}/>}
                </button>
            </styled.Element>
        </styled.Container>
    );
}

export default Header;