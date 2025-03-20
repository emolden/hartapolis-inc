export default function Task ( {tasks} ) {
    return (
        <>
            <tbody>
            {
                tasks?.map((task) => ( 
                <tr>
                    <td>{task.description}</td>
                    <td>{task.is_completed? 'Yes' : 'No'}</td>
                    <td>{task.person_assigned}</td>
                    <td>{task.due_date}</td>
                    <td>{task.estimated_duration} hours</td>
                    <td><button>X</button></td>
                </tr>
                ))
            }
            </tbody>
        </>
    );
};