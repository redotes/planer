import React from "react";


const Textbox = () => {
    return (
        <div class="search">
            <input type="text"></input>
        </div>
    )
}




const Header = () => {
    return (
        <div class="manulink">
            <ul>
                <li>set1</li>
                <li>set2</li>
                <li>set3</li>
                <li>set4</li>
                <Textbox />
                <li>set5</li>
            </ul>
        </div>
    )

}



export default Header;