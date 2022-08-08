import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../winbox/WinboxComponent";
function Projects() {
    const { showMyProjects } = useSelector((state) => state.items);
    const dispatch = useDispatch();
    function toggle() {
      dispatch(toggleVisibility("showMyProjects"));
    }
    return (
      <WinboxComponent title="My projects" onCloseWindow={() => toggle}>
        <div>My Projects</div>
      </WinboxComponent>
    );
}

export default Projects