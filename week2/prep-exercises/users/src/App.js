import React from 'react';
import PersonController from './PersonController';

function App() {
  return (
    <div>
      <h1>Random Person</h1>
      <PersonController />
    </div>
  );
}

export default App;


///prep ex before seperation 

// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [person, setPerson] = useState(null);

//   const getPerson = async () => {
//     try {
//       const response = await fetch("https://www.randomuser.me/api?results=1");
//       const data = await response.json();
//       setPerson(data.results[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getPerson();
//   }, []);

//   return (
//     <div>
//     {person ? (
//       <ul>
//         <li>First Name: {person.name.first}</li>
//         <li>Last Name: {person.name.last}</li>
//         <li>Email: {person.email}</li>
//       </ul>
//     ) : (
//       <p>Loading person data...</p>
//     )}
//   </div>
// );
// }

// export default App;










///fetching user 1st try///
// import React, { useEffect, useState } from 'react';
// import './App.css';
// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://randomuser.me/api/')
//       .then(response => response.json())
//       .then(data => setUser(data.results[0]))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>{user.name.first} {user.name.last}</h2>
//           <p>Location: {user.location.city}, {user.location.country}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// }

// export default App;