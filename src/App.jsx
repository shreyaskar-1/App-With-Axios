import { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";

function App() {

  // const API = "https://jsonplaceholder.typicode.com";

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");


  // // using promises
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setMyData(res.data); 
  //     })
  //     .catch((error) => {
  //       setIsError(error.message)
  //     });
  // }, []);

  // using Async Await
  const getApiData = async()=>{
    try{
      const res = await axios.get("/posts");
      setMyData(res.data); 
    }catch(error){
      setIsError(error.message)
    }
  }
  useEffect(()=>{
    getApiData();
    // getApiData(`${API}/posts`);
  },[])

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== ""&& <h2>{isError}</h2>}
      <div className="card_container">
      {myData.slice(0,12).map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title .slice(0,15).toUpperCase()}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
