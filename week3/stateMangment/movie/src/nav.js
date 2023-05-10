import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return(
        // <div className='nav'>
        <nav>
            <h3>Dev Ed</h3>
            <p>List of movies:{movies.length}</p>
        </nav>
        // </div>

    );
};

export default Nav;