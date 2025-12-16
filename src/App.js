// // App.js
// import React from "react";
// import RecipeList from "./components/RecipeList";

// const App = () => {
//   return (
//     <div>
//       <RecipeList />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Contact' element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { useState } from "react";
import EventList from "./components/EventList";

export default function App() {
  const [events, setEvents] = useState([]);

  return (
    <div className="app">
      <EventList events={events} setEvents={setEvents} />
    </div>
  );
}
