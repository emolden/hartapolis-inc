import React from "react";

const TeamProjects = (props) => {
    return (
        <>
            <div>
            <h1>Team Projects</h1>
            {
          props.projects.map((project) => ( <h3>Team Projects {project.project_attributes.name}</h3>))
        }
            </div>
        </>
    );
};

export default TeamProjects;