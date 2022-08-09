import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClimbingBoxLoader from "react-spinners/CircleLoader";
import axios from "axios";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../winbox/WinboxComponent";
import ProjectCard from "../projectCard";
function Projects() {
  const { showMyProjects } = useSelector((state) => state.items);
  const [projects, setProjects] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showMyProjects"));
  }
  async function callGithubAPI() {
    try {
      let res = await axios.get(
        "https://api.github.com/users/sugamkarki/repos"
      );
      setIsLoading(false);
      //   return res.data;
      //   projects = res.data;
      setProjects(res.data);
    } catch (err) {
      setIsLoading(false);
      return err.error;
    }
  }
  useEffect(() => {
    setIsLoading(true);
    callGithubAPI();
  }, []);
  if (isLoading) {
    return (
      <WinboxComponent
        title="My Projects"
        onCloseWindow={() => toggle}
        className="projects"
      >
        <div className="container">
          <ClimbingBoxLoader color={"#555"} loading={isLoading} size={150} />
        </div>
      </WinboxComponent>
    );
  }
  return (
    <WinboxComponent title="My Projects" onCloseWindow={() => toggle}>
      <div className="projects">
        <h1>Take a look at my Github Repositories</h1>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
        <div></div>
      </div>
    </WinboxComponent>
  );
}

export default Projects;
