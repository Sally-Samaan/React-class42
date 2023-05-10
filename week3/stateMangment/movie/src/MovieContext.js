import React, {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price:'€5',
            id: 0
        },
        {
            name:'Monday',
            price:'€15',
            id: 1
        },
        {
            name:'shark',
            price:'€7',
            id: 2
        },
        {
            name:'Lord of the ring',
            price:'€20',
            id: 3
        },
        {
            name:'Harry Potter2',
            price:'€5',
            id: 4
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}