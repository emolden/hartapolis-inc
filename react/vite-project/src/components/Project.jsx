import { useParams } from "react-router-dom"

import { useAuth } from '../hooks/AuthContext';
import NewRow from "./NewRow";
import { useState, useEffect, useContext } from 'react'
import Task from "./Task";
import RequireAuth from "./RequireAuth";

export default function Project () {
    const [project, setProject] = useState(null)
    const [pageEdit, setPageEdit] = useState(false)
    const [newRow, setNewRow] = useState(false)

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

    const showNewRow = () => {
        setNewRow(true);
    }

    return (
        <>
        <div class="container d-flex flex-column justify-content-center">
            <div class="card">
                <h3>{project?.project_attributes.name}</h3>
            <h6>Team Size: {project?.project_attributes.team_size}</h6>
            <h6>Budget: ${project?.project_attributes.budget}</h6>
            <h6>Workload: {project?.project_attributes.workload} days</h6>
            <h6>Start Date: {project?.project_attributes.start_date}</h6>
            <h6>Completion Date: {project?.project_attributes.completion_time}</h6>
            <h6>Manager: {project?.project_attributes.manager_name}</h6>
            </div>
      </div>
      <h6>Tasks:</h6>
      <RequireAuth>
      {user?.role==="manager"&&<button onClick={showNewRow}>Add a New Row</button>}
      </RequireAuth>
          <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">
                    Description
                </th>
                <th scope="col">
                    Is Completed
                </th>
                <th scope="col">
                    Person Assigned
                </th>
                <th scope="col">
                    Due Date
                </th>
                <th scope="col">
                    Estimated Completion Time
                </th>
                
                <RequireAuth>
                {user?.role==="manager"&&<th scope="col">Delete</th>}
                </RequireAuth>

                </tr>
            </thead>
            <tbody>
            <Task tasks={project?.tasks} pageEdit={pageEdit} fetchProjectById={fetchProjectById}/>
            {newRow? <NewRow projectId={project._id} fetchProjectById={fetchProjectById} setNewRow={setNewRow}/> : ""}
            </tbody>
          </table>
          {/* {pageEdit? <button>Save</button> : ""} */}
        </>
    );
};