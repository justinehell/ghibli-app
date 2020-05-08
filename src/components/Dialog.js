import React from 'react';

function Dialog( props) {

    const styledDiv1 = {
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "999",
        backgroundColor: "rgba(0,0,0,.6)",
    }

    const styledDiv2 = {
        backgroundColor: "white",
        position: "fixed",
        top: "32px",
        left: "550px",
        right: "550px",
        zIndex: "1000",
        padding: "30px",
        letterSpacing: "1px",
        lineHeight: "1.6"
    }

    const styleDiv3 = {
        fontWeight: "500",
        fontSize: "1em"
    }

    const styledBtn = {
        padding: "10px",
        borderRadius: "2px",
        backgroundColor: "gray",
        right: "0",
        color: "white"
    }

    return(
        <div style={styledDiv1}>
            <div style={styledDiv2}>

                <div style={styleDiv3}>What is this?</div>
                <br></br>
                <hr />
                <br></br>
                <div style={{fontSize: "0.8em"}}>                
                    A React app developed using the Ghibli API to display basic information about Studio Ghibli characters, films, locations, species and their relations. 
                    Everything is click based, so you can use it as a visual guide to help remember all the magical univers of Ghibli movies. I had fun building this app, it helped me practice and learn how react works.
                </div>
                <br></br>
                <br></br>
                <div style={styleDiv3} important>Where does the information come from?</div>
                <br></br>
                <hr />
                <br></br>
                <div style={{fontSize: "0.8em"}}>
                    This app utilizes the Ghibli API (at <a href=" https://ghibliapi.herokuapp.com" target="_blank">ghibliapi</a>), so the unkown information displayed in this app will be updated as the API is updated. 
                    As for the pictures, they were freely collected from Ghibli Wiki. Studio Ghibli and all associated names and/or images are copyright Studio Ghibli.
                </div>
                <br></br>
                <br></br>
                <div style={styleDiv3}>Notice a bug or have improvment ideas?</div>
                <br></br>
                <hr />
                <br></br>
                <div style={{fontSize: "0.8em"}}>
                    Please, if you notice something weird with the website, let me know by sending an email at hell.justine@gmail.com. 
                    The same goes for site improvements and/or ideas. This app was greatly inspired by the "Star Wars - A visual Guide" website created by TIM SARVEY.
                    You can visit his amazing work <a href=" https://starwars-visualguide.com/#/" target="_blank">here</a>.
                <br></br> 
                    Thanks!
                </div> 
                <br></br>
                <br></br>
                <button style={styledBtn} onClick={props.onClose}>CLOSE</button>
            </div>
        </div>

    )
}

export default Dialog