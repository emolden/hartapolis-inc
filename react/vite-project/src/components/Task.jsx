import React, { useState } from 'react';

export default function Task ( {tasks, pageEdit, fetchProjectById} ) {
        const[description, setDescription] = useState({});
        // const[isComplete, setIsComplete] = useState();
        const[personAssigned, setPersonAssigned] = useState({});
        const[dueDate, setDueDate] = useState({});
        const[completionTime, setCompletionTime] = useState({});
        


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

    return (
        <>
            <tbody>
            
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
                    <td><button onClick = {(e) =>changeCompleted(e, task.task_id, task.is_completed)}>{task.is_completed? 'Yes' : 'No'}</button></td>
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
                    {pageEdit? <td><button>X</button></td> : ""}
                </tr>
                ))
            }
            </tbody>
            
        </>
    );
};