import React from 'react';


function Person({ person }) {
  if (!person) {
    return <p>Loading...</p>;
  }
  const { first, last } = person.name;
  const email = person.email;
  const phoneNumber = person.phone;

  return (
    <ul>
      <li>First Name: {first}</li>
      <li>Last Name: {last}</li>
      <li>Email: {email}</li>
      <li>Telephone: {phoneNumber}</li>
    </ul>
  );
}


///before refactoring 
//   return (
//     <ul>
//       <li>First Name: {person.name.first}</li>
//       <li>Last Name: {person.name.last}</li>
//       <li>Email: {person.email}</li>
//     </ul>
//   );
// }

export default Person;