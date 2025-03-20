export default function Task ( {tasks, setProject, project, pageEdit} ) {

    const changeCompleted = (e, index) => {
        let value = e.target.innerHTML
        console.log(tasks[index])
        // setProject({...project, tasks[index].is_completed: true})
    }
    return (
        <>
            
            {
                tasks?.map((task, index) => ( 
                <tr key = {index}>
                    {pageEdit? <td><innput
    
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                />
                </td> : <td>{task.description}</td> }
                    <td><button onClick = {(e) =>changeCompleted(e, index)}>{task.is_completed? 'Yes' : 'No'}</button></td>
                    <td>{task.person_assigned}</td>
                    <td>{task.due_date}</td>
                    <td>{task.estimated_duration} hours</td>
                    {pageEdit? <td><button>X</button></td> : ""}
                </tr>
                ))
            }
        </>
    );
};