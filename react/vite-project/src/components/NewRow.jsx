import React, { useState } from 'react';
import uuid from 'react-uuid'

export default function NewRow ({projectId, fetchProjectById, setNewRow}) {
        const[description, setDescription] = useState("");
        const[isComplete, setIsComplete] = useState();
        const[personAssigned, setPersonAssigned] = useState("");
        const[dueDate, setDueDate] = useState(undefined);
        const[completionTime, setCompletionTime] = useState("");


        const handleSaveRow = async () => {
            const newTaskId = uuid();
            const newTask =
            {'projectId': projectId,
            tasks: {
                "task_id": newTaskId,
                "description":  description,
                "is_completed": false,
                "person_assigned": personAssigned,
                "due_date": dueDate,
                "estimated_duration": completionTime
              }
            }
            console.log(newTask)

            try {
                const response = await fetch(`http://localhost:3000/api/tasks/addnew`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newTask),
                });
                console.log(response)
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                fetchProjectById();
                setNewRow(false)
                // const data = await response.json();
                
               
            } catch (error) {
                console.error("Error posting task is_completed", error);
                
            }
        }

    return (

        <>
            <tr>
                    <td><input
                        type="text"
                        className="form-control"
                        id="description"
                        value = {description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </td>
                    <td>No</td>
                    <td><input
                        type="text"
                        className="form-control"
                        id="personAssigned"
                        value = {personAssigned}
                        onChange={(e) => setPersonAssigned(e.target.value)}
                        />
                    </td>
                    <td><input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        value = {dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        />
                    </td>
                    <td><input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        value = {completionTime}
                        onChange={(e) => setCompletionTime(e.target.value)}
                        />
                    </td>
                    {/* <td><button onClick={(e) => handleDelete(e, task.task_id)}>X</button></td> : ""} */}
                </tr>
                <button type="button" class="btn btn-outline-primary" onClick={handleSaveRow}>Save Row</button>
        </>
    )
}