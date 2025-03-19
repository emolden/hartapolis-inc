import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hartapolis Inc</h1>
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
                Estimated Completin Time
              </th>
            </tr>
            <tr>
              <td>Initial planning phase of the project</td>
              <td>NO</td>
              <td>John Doe</td>
              <td>4/15/25</td>
              <td>10 hours</td>
            </tr>
            <tr>
              <td>Develop project timeline and milestones</td>
              <td>NO</td>
              <td>Jane Smith</td>
              <td>4/30/25</td>
              <td>12 hours</td>
            </tr>
            <tr>
              <td>Create initial wireframes and mockups</td>
              <td>NO</td>
              <td>Emily Brown</td>
              <td>5/10/25</td>
              <td>8 hours</td>
            </tr>
          </table>
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
