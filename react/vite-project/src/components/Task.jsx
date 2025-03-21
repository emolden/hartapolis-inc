import React, { useState } from 'react';
import { useAuth } from '../hooks/AuthContext';
import RequireAuth from "./RequireAuth";

export default function Task ( {tasks, pageEdit, fetchProjectById} ) {
        const[description, setDescription] = useState({});
        // const[isComplete, setIsComplete] = useState();
        const[personAssigned, setPersonAssigned] = useState({});
        const[dueDate, setDueDate] = useState({});
        const[completionTime, setCompletionTime] = useState({});

        const { user } = useAuth();

        const editTasks = () =>  {
            console.log(description, personAssigned, dueDate, completionTime)
        }
        


    const changeCompleted = async (e, id, isCompleted) => {
        
        // let value = e.target.innerHTML
        console.log(id)
        const taskInfo = {
            id: id,
            is_completed: !isCompleted
        }
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/iscompleted`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskInfo),
            });
            console.log(response)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            fetchProjectById();
            // const data = await response.json();
            
           
        } catch (error) {
            console.error("Error posting task is_completed", error);
            
        }
        
    }

    const handleDelete = async (e, id) => {
        // console.log(id)
        const taskToDelete = {
            id: id
        }
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/delete`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskToDelete),
            });
            console.log(response)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            fetchProjectById();
            // const data = await response.json();
            
           
        } catch (error) {
            console.error("Error posting task is_completed", error);
            
        }
        
    }

    return (
        <>
            
            {
                tasks?.map((task) => ( 
                <tr key = {task.task_id}>
                    {pageEdit? <td><input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder={task.description}
                        value = {description.task_id}
                        onChange={(e) => setDescription({...description, [`${task.task_id}`]: e.target.value})}
                        />
                    </td> : <td>{task.description}</td> }
                    <td><button type="button" class={task.is_completed? "btn btn-outline-success" : "btn btn-outline-danger"} onClick = {(e) =>changeCompleted(e, task.task_id, task.is_completed)}>{task.is_completed? 'Yes' : 'No'}</button></td>
                    {pageEdit? <td><input
                        type="text"
                        className="form-control"
                        id="personAssigned"
                        placeholder={task.person_assigned}
                        value = {personAssigned.task_id}
                        onChange={(e) => setPersonAssigned({...personAssigned, [`${task.task_id}`]: e.target.value})}
                        />
                    </td> : <td>{task.person_assigned}</td> }
                    {pageEdit? <td><input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        placeholder={task.due_date}
                        value = {dueDate.task_id}
                        onChange={(e) => setDueDate({...dueDate, [`${task.task_id}`]: e.target.value})}
                        />
                    </td> : <td>{task.due_date}</td> }
                    {pageEdit? <td><input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        placeholder={task.estimated_duration}
                        value = {completionTime.task_id}
                        onChange={(e) => setCompletionTime({...completionTime, [`${task.task_id}`]: e.target.value})}
                        /> hours
                    </td> : <td>{task.estimated_duration}</td> }
                    <RequireAuth>
                    {user?.role==="manager"&&<td><button type="button" class="btn btn-outline-danger btn-sm" onClick={(e) => handleDelete(e, task.task_id)}>X</button></td> }
                    </RequireAuth> 
                </tr>
                ))
            }
            
        </>
    );
};