import React from "react";
import { Link } from "react-router-dom"

const TeamProjects = (props) => {
    return (
        <>
            <h1>Team Projects</h1>
            <div>
            {
                props.projects.map((project) => ( <button 
                    key = {project._id}> 
                    <Link to = {`/projects/${project._id}`}>
                        {project.project_attributes.name}
                    </Link>
                    </button>))
            }
            </div>
        </>
    );
};

export default TeamProjects;