// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App(){
  const title = "Welcome To The New Blog!";
  return(
        <div className="App">
          <Navbar/>
        <div className= "content">
          <Home/>
          </div>
     </div>
 );
}


export default App;




///net ninja 4
// function App(){
//   const title = "Welcome To The New Blog!";
//   const likes = 50;
//   const link = "http://sallysamaan.com/";
//   // const person = { name:"Sall", year:2023};
//   return(
//     <div className="App">
//     <div className= "content">
//       <h1>{title}</h1>
//       <p>Liked {likes} times</p>
//       {/* <p>{person}</p> */}
//       <p>{ 10 * likes}</p>
//       <p>{"Prinklink Says Hellooooooo <3"}</p>
//       <p>{[1, 2, 4,]}</p>
//       <p>{Math.random() * 10}</p>
//       <a href ={link}> Website link</a> 
//     </div>
//     </div>
//  );
// }


// export default App;




////>>>>>>Number INcrement and decrement >>>>>////
// import React, {useState} from 'react';

// function App(){
//     const [count, setCount] = useState(()=>{
//       console.log('run function');
//       return 4;
//     });

//     function decrementCount(){
//       setCount(prevCount => prevCount -1)
//     }

//     function incrementCount(){
//       setCount(prevCount => prevCount +1)
//     }

//     return (   
//     <>
//     <button onClick={decrementCount}>-</button>
//     <span>{count}</span>
//     <button onClick={incrementCount}>+</button>
//     </>
//     )
// } 