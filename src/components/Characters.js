import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import imgDataCharacters from './../data/imgDataCharacters';
import PageContainer from './../styledComponents/PageContainer';
import ElementPerPage from './../styledComponents/ElementPerPage';
import CardStyle from './../styledComponents/CardStyle';
import CardImageStyle from './../styledComponents/CardImageStyle';

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
            <PageContainer>
                {currentElements.map(character => (
                    <ElementPerPage key={character.id}>
                        <Link to={`/people/${character.id}`}>
                            <CardStyle>
                                <CardImageStyle src={imgDataCharacters.filter(item => item.id === character.id)[0].src} alt="characterImg"></CardImageStyle>
                                <span>{character.name}</span>
                            </CardStyle>
                        </Link>
                    </ElementPerPage>
                ))}
            </PageContainer>
        </div>
    )
}

export default Characters