import react from "react";
import './App.css';
import JsonFile from "./db.json";
import Footer from "./Footer";

const Rating =({rate})=>{
  return[...Array(5).keys()].map((e,index)=>
  {
    return e<rate?<li style={{color:'yellow'}} key={index}>&#9733;</li>:<li key={index} style={{color:'grey'}}>&#9733;</li>
  }
  
  )

}

function App() {
  console.log(JsonFile)
  return (
    <div>
      <div className="header">
    <h1>🎥Movies🎞️ </h1>
    </div>
    <div className="data" >
   
      {JsonFile.posts.map(e=>
        <div className="moviecard">    
          <div class="card-body">
          <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} className="card-img-top" alt="Image"/>
            <h2 className="card-title">{e.original_title}</h2>
            <ul className="rate">
              Rating:-
              <Rating rate={e.vote_average>0?e.vote_average/2:e.vote_average}/>
            </ul>
            <p className="card-text">Overview:-{e.overview}</p>
            <p><span>Release_date:-</span>{e.release_date}</p>
           
          </div>
            
        </div>
        )}
      
    </div>
    <Footer/>
    </div>
  );
}

export default App;
