import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import imgDataFilms from './../data/imgDataFilms';
import PageContainer from './../styledComponents/PageContainer';
import ElementPerPage from './../styledComponents/ElementPerPage';
import CardStyle from './../styledComponents/CardStyle';
import CardImageStyle from './../styledComponents/CardImageStyle';


function Films() {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(8);

    const fetchFilms = async () => {
        setLoading(true);
        const data = await fetch('https://ghibliapi.herokuapp.com/films');
        const filmsData = await data.json();
        setFilms(filmsData);
        setLoading(false);
    }

    useEffect(() => {
        fetchFilms();
    }, []);

    // Get current elements = films
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = films.slice(indexOfFirstElement, indexOfLastElement);


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
                    <h1>Films</h1>
                </div>
                <Pagination 
                    elementsPerPage={elementsPerPage} 
                    totalElements={films.length} 
                    paginate={paginate} 
                />
            </div>
            <PageContainer>
                {currentElements.map(film => (
                    <ElementPerPage key={film.id}>
                        <Link to={`/films/${film.id}`}>
                            <CardStyle>
                                <CardImageStyle src={imgDataFilms.filter(item => item.id === film.id)[0].src} alt="filmImg"></CardImageStyle>
                                <span>{film.title}</span>
                            </CardStyle>
                        </Link>
                    </ElementPerPage>
                ))}
            </PageContainer>
        </div>
    )
}

export default Films