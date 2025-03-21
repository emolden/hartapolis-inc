import React from "react";
import { Link } from "react-router-dom"

const TeamProjects = (props) => {
    return (
        <>
            <h1 class="text-center mt-5 mb-5">Team Projects</h1>
            <div class="container d-flex justify-content-around">
            {
                props.projects.map((project) => ( <button 
                    key = {project._id}
                    class="card p-3   m-3 "> 
                    <Link to = {`/projects/${project._id}`} class="h3 text-primary">
                        {project.project_attributes.name}
                    </Link>
                    </button>))
            }
            </div>
        </>
    );
};

export default TeamProjects;