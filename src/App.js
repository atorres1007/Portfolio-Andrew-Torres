import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';

//Page Imports
import ProjectsPage from './pages/projectsPage';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import ResumePage from './pages/resumePage';
import ContactPage from './pages/contactPage';
import IndividualProjectPage from './pages/individualProjectPage'
import Sidebar from './components/sidebar';
import Dropdown from './components/dropdown';

export const SidebarContext = React.createContext(null);

function App() {

    const [projects, setProjects] = useState([])
  
    useEffect(() => {
      fetch('/projects.json')
      .then(res => {return res.json(); })  
      .then(data => {setProjects(data)})
    }, [])

    //Sidebar state to change on button click to track if it is open or not
    const [sidebarOpen, setSidebarOpen] = useState(false)

    //Function to set the sidebar state to the opposite of its current state
    function handleSidebar() {
      setSidebarOpen(!sidebarOpen);
    }

  return (
    <div className="App">

      <SidebarContext.Provider value={{ sidebarOpen: sidebarOpen }}>
        <Header handleSidebar={handleSidebar}/>
        <Sidebar handleSidebar={handleSidebar}/>
      </SidebarContext.Provider>

      <Dropdown />

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/projects' element={<ProjectsPage projects={projects}/>}/>
          <Route path='/projects/:projectName' element={<IndividualProjectPage projects={projects}/>}/>
          <Route path='/resume' element={<ResumePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='*' element={<HomePage/>}/>
        </Routes>
      </main>

      <Footer/>

    </div>
  );
}

export default App;
