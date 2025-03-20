import React, { useState } from 'react';


export default function ProjectPredictor() {
  const [teamSize, setTeamSize] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState(null);


  const [workload, setWorkload] = useState('');
  const [endDate, setEndDate] = useState('');

  const handlePredict = async (e) => {
    e.preventDefault();

    const data = {
      team_size: teamSize,
      budget: budget
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setWorkload(Math.floor(result));
        //setEndDate(result.end_date);

        console.log(startDate);
        //setEndDate(new Date(new Date(2025,2,24).setDate(2025-2-24+workload)).toDateString())
        const initialDate = new Date(2025, 2, 24); 
  const futureDate = new Date(initialDate); 
  futureDate.setDate(initialDate.getDate() + workload);
  setEndDate(futureDate.toDateString());
        console.log(endDate)
      } else {
        console.error('Prediction failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h1>Project Predictor</h1>
      <div className="container">
        <form onSubmit={handlePredict} className="mt-5">
          <div className="form-group">
            <label htmlFor="team-size">Team Size</label>
            <input
              type="number"
              className="form-control"
              id="team-size"
              placeholder="Number of People"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input
              type="number"
              className="form-control"
              id="budget"
              placeholder="Dollars"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              className="form-control"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div> */}
          <button type="submit" className="btn btn-primary">Predict Workload</button>
        </form>
      </div>
      <div className="container">
        <div>
          <h5>Workload: {workload} days</h5>
          {/* <h5>End Date: {endDate}</h5> */}
        </div>
      </div>
    </>
  );
}