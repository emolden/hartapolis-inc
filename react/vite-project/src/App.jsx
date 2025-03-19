import { useState, useEffect } from 'react'
import ProjectPredictor from './components/ProjectPredictor';
import Project from './components/Project';
import Login from './components/Login';
import NavBar from './components/NavBar';
import TeamProjects from './components/TeamProjects';
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PROJECTS_API_URL}`)
        if (!response.ok) {
          throw new Error('Data could not be fetched');
        }
        const json_response = await response.json();
        setData(json_response);
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
       <NavBar />
       <Login />
          <ProjectPredictor />
          <TeamProjects />
          {/* Task component is inside Project component */}
          <Project />
          
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  )
}

export default App
