import { useState, useEffect } from 'react'
import ProjectPredictor from './components/ProjectPredictor';
import Project from './components/Project';
import Login from './components/Login';
import NavBar from './components/NavBar';
import TeamProjects from './components/TeamProjects';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { AuthProvider } from './hooks/AuthContext';
import RequireAuth from './components/RequireAuth';
// import './App.css'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PROJECTS_API_URL}/api/projects`)
        if (!response.ok) {
          throw new Error('Data could not be fetched');
        }
        const json_response = await response.json();
        setProjects(json_response);
        console.log(json_response);
      }
      catch(error) {
        console.error('Error fetching homepage', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login/>
          } />
          <Route exact path="/project-predictor" element={<ProjectPredictor />} />
          <Route exact path="/" element={<TeamProjects projects={projects}/>}/>
              {/* Task component is inside Project component */}
          <Route exact path="/projectid" element={<Project />}/>
              
            {/* <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button> */}
        </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
