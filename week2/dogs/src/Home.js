const Home = () => {
    const handleClick = (e)=>{
        console.log("Hello Mensen", e);
        };
    const handleClickAgain = (name, e)=>{
        console.log('hello '+name, e.target);
    } 


    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick= {(e)=>handleClickAgain("Mario", e)}>Click me again</button>
        </div>
     );
}
 
export default Home;