import Task from "./Task";

export default function Project () {
    return (
        <>
            <h3>Project Alpha</h3>
      <h3>(only manager) Edit Project *button*</h3>
      <h6>Team Size: 5</h6>
      <h6>Budget: $100,000</h6>
      <h6>Workload: 150 hours</h6>
      <h6>Completion Date: 12/31/25</h6>
      <h6>Manager: Alice Green</h6>
      <h6>Tasks:</h6>
      <h6>Order By *dropdown*</h6>
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
                <th>(manager) Delete</th>
                </tr>
            </thead>
            <Task />
          </table>
        </>
    );
};