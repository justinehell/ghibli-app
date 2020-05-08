import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import imgData from './../data/imgData';

function Characters() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(8);

    const fetchPeople = async () => {
        setLoading(true);
        const data = await fetch('https://ghibliapi.herokuapp.com/people');
        const peopleData = await data.json();
        setCharacters(peopleData);
        setLoading(false);
    }

    useEffect(() => {
        fetchPeople();
    }, []);

    // Get current elements = characters
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = characters.slice(indexOfFirstElement, indexOfLastElement);


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const styledContainer = {
        // backgroundColor: "black",
        display: "flex",
        textAlign: "center",
        flexWrap: "wrap",
        marginRight: "10%",
        marginLeft: "10%",
        justifyContent: "center",
        paddingTop: "50px",
    }

    const styledDiv = {
        width: "20%",
        padding: "25px",
    }

    const styledImg = {
        width: "100%",
        height: "350px",
        objectFit: "cover",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        paddingBottom: "10px"
    }

    return(
        <div className=''>
            <div className='margin-auto width-80 flex space-between items-center'>
                <div className='flex space-around'>
                    <Link  to='/'>
                        <h1>Home</h1>
                    </Link>
                    <h1>&nbsp;/&nbsp;</h1>
                    <h1>Characters</h1>
                </div>
                <Pagination 
                    elementsPerPage={elementsPerPage} 
                    totalElements={characters.length} 
                    paginate={paginate} 
                />
            </div>
            <div style={styledContainer}>
                {currentElements.map(character => (
                    <div style={styledDiv} key={character.id}>
                        <Link to={`/people/${character.id}`}>
                            <div style={{backgroundColor: "black", borderRadius: "15px", paddingBottom: "15px"}}>
                                <img style={styledImg} src={imgData.filter(item => item.id === character.id)[0].src} alt="characterImg"></img>
                                <span>{character.name}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters