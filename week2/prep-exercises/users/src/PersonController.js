import React, { useState, useEffect} from 'react';
import Person from './Person';
import PersonButton from './PersonButton';

function PersonController() {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const getPerson = async () => {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setPerson(data.results[0]);
      setLoading(false);
    };
  
    useEffect(() => {
      getPerson();
    }, []);
  
    const handleClick = () => {
        getPerson();
      };
    

    return (
        <div>
        <PersonButton onClick={handleClick} />
        {loading ? (
          <p>Loading...</p>
        ) : person ? (
          <Person person={person} />
        ) : null}
      </div>
    );
  }
  
  export default PersonController;
