// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return  <div className="projects-container">
                <div className="sidebar">
                    <img className="project-image" src={props.img}
                        alt={props.projectName}/><br></br>
                    {/* <a href={props.projectLink}>Github Repo</a><br></br> */}
                    {/* <a href={props.deployedSite}>Website</a> */}
                    <ul className="list">
                        <li className="item">
                            <a className="link" href={props.projectLink}>Github Repo</a>
                        </li>
                        <li className="item">
                            <a className="link" href={props.deployedSite}>Website</a>
                        </li>
                    </ul>
                </div>
                <div className="project-main">
                        <h2 className="project-name">{props.projectName}</h2>
                    {/* <h3 className="profile-name"></h3> */}
                    <p className="project-position">Website Development Project</p>
                    <p className="project-body">This is a project from General Assembly Seir-Seal Education Course</p>
                </div>            
            </div>
}

// export the component
export default Projects