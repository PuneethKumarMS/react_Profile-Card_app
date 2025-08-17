import React from "react"; 
import ProfileCard from "./components/profileCard"; 
import "./App.css"; 
import image from "./assets/puneeth-rajkumar_9.jpg"; 
 
function App() { 
  return ( 
    <div className="card-container"> 
      <ProfileCard 
        name="Ashwini" 
        image={image} 
        bio="Passionate React developer with a knack for building responsive and 
interactive user interfaces." 
        bgColor="lightblue" 
      /> 
      <ProfileCard 
        name="Pooja" 
        image={image} 
        bio="Friendly and professional air hostess committed to passenger well
being and safety. Ready to assist and make your journey a pleasant one." 
        bgColor="lightgreen" 
      /> 
    </div> 
  ); 
} 
 
export default App; 