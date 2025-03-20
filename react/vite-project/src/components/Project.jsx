import { useParams } from "react-router-dom"

import { useAuth } from '../hooks/AuthContext';

import { useState, useEffect, useContext } from 'react'
import Task from "./Task";
import RequireAuth from "./RequireAuth";

export default function Project () {
    const [project, setProject] = useState(null)
    const [pageEdit, setPageEdit] = useState(false)

    const[change, setChange] = useState('')
    


    const[description, setDescription] = useState("");
    const[isComplete, setIsComplete] = useState();
    const[personAssigned, setPersonAssigned] = useState();
    const[dueDate, setDueDate] = useState();
    const[completionTime, setCompletionTime] = useState();
    const { user } = useAuth();
        console.log({user})

    let { id } = useParams();
    const fetchProjectById = async ()=> { 
        console.log('fetch project by id being called')
        try {
          const response = await fetch(`http://localhost:3000/api/projects/${id}`);
          if (!response.ok) {
            throw new Error('Data could not be fetched!');
          }
          const json_response = await response.json();
          setProject(json_response);
          console.log(json_response);
        } catch (err) {
          console.error("Error fetching character by id", err);
        }
    
      };
   
    useEffect (() => {
        
          fetchProjectById(id);
        }, [change])

    const changePageEdit = () => {
        setPageEdit(!pageEdit)
    }

    return (
        <>
        <h3>{project?.project_attributes.name}</h3>
      <h6>Team Size: {project?.project_attributes.team_size}</h6>
      <h6>Budget: ${project?.project_attributes.budget}</h6>
      <h6>Workload: {project?.project_attributes.workload} days</h6>
      <h6>Start Date: {project?.project_attributes.start_date}</h6>
      <h6>Completion Date: {project?.project_attributes.completion_time}</h6>
      <h6>Manager: {project?.project_attributes.manager}</h6>
      <h6>Tasks:</h6>
      <h6>Order By *dropdown*</h6>
      <RequireAuth>
      {user?.role==="manager"&&<button onClick={changePageEdit}>Edit</button>}
      </RequireAuth>
          <table>
            <thead>
                <tr>
                <th>
                    Description
                </th>
                <th>
                    Is Completed
                </th>
                <th>
                    Person Assigned
                </th>
                <th>
                    Due Date
                </th>
                <th>
                    Estimated Completion Time
                </th>
                
                {pageEdit? <th>Delete</th> : ""}

                </tr>
            </thead>
            {/* <tbody> */}
            <Task tasks={project?.tasks} pageEdit={pageEdit} fetchProjectById={fetchProjectById}/>
            {/* </tbody> */}
          </table>
          {pageEdit? <button>Save</button> : ""}
        </>
    );
};