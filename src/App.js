import React from 'react'
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import './app.css'
import Home from './Pages/home/Home';
function App() {
  return (
    <div >
    <Topbar/>
    <div className="container">
      <Sidebar/>
        <Home/>
    </div>
    </div>
  );
}

export default App;
