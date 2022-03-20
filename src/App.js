import React from "react";
import Navbar from "./Components/Navbar";
import TopComponent from "./Components/TopComponent";
import Card from "./Components/Card";
import Data from "./Components/Data";


function App(){
  const cards = Data.map(item =>{
    return (
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div>
        <Navbar/>
        <TopComponent/>
        <section className = "card-list">
          {cards}
        </section>
        
    </div>
    
  )
};

export default App;