import Projects from "./Projects"
import projectInfo from "../projectInfo"


// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="Main"> 
            {projectInfo.map((p,i) => <Projects
            {...p}
            />)}
            </div>
}

// export the component
export default Main