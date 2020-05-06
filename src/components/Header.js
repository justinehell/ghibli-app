import React, { useState } from 'react';
import Logo from './../images/Logo_Ghibli.png';
import Dialog from './Dialog';

function Header() {

    const [ isClicked, setIsClicked ] = useState(false);

    const handleClickOpen = () => {
        setIsClicked(true);
    }

    return(
        <nav className="min-height-10vh bg-ivory">
            <div className="help">
                <button onClick={() => handleClickOpen()}><i class="fas fa-question-circle fa-2x"></i></button>
            </div>
            <div>
                {isClicked ? <Dialog onClose={() => setIsClicked(false)} /> : ""}
            </div>
            <div className="text-center">
                <img className="h-150" src={Logo} alt="logo studio Ghibli"></img>
            </div>

        </nav>
    )
}

export default Header