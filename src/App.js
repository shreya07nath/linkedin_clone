import React from 'react';
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";

function App() {
  return (
    <div className="app">
      <Header />
      
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
