import React, { useState } from 'react';

export default function ProjectPredictor () {
    const [teamSize, setTeamSize] = useState(0)
    const [budget, setBudget] = useState(0)
    const [startDate, setStartDate] = useState(null)

    const handleLogin = () => {

    }
    return (
        <>
            <h1>Project Predictor</h1>
            <div className="container">
            <form onSubmit={handleLogin} className="mt-5">
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
                <div className="form-group">
                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Predict Workload</button>
            </form>
            </div>
            <div className="container">
                <div>
                    <h5>Workload: days</h5>
                    <h5>End Date: </h5>
                </div>

            </div>
        </>
    );
};