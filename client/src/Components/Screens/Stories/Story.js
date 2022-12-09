import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavbarUser from "../../Layout/NavbarUser";
import { useParams } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import TaskContext from "../../../Context/task/taskContext";
import TaskCard from "../Tasks/TaskCard";
import axios from "axios";
import CreateTask from "../Tasks/CreateTask";
import StoryContext from "../../../Context/story/storyContext";
import AuthContext from "../../../Context/auth/authContext.js";
import Container from "react-bootstrap/esm/Container";
const Story = () => {
  let { id } = useParams();
  // console.log(id);
  const storyContext = useContext(StoryContext);
  const taskContext = useContext(TaskContext);
  const { tasks, getTasks } = taskContext;

  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const { story, getStory } = storyContext;
  useEffect(() => {
    loadUser();
    getStory(id);
    getTasks();
  }, []);
  // console.log(story);
  if (story) {
    const { storyname, description, duedate, status } = story;
  }
  console.log("jayesh ", tasks);
  console.log("id", id);

  return (
    <div>
      <div className="main-content">
        {/* <NavbarUser /> */}
        <div className="greeting-banner place-center">
          {story && <h2>{story.storyname}</h2>}
        </div>
        <div className="project-desc">
          <h2 style={{ color: "black" }}>Story Description</h2>
          {story && <p className="lead">{story.description}</p>}
        </div>
        {user && user.isPM && (
          <div className=" place-center">
            <Button variant="primary" type="submit">
              Edit
            </Button>
            <Button variant="primary" type="submit">
              Delete
            </Button>
          </div>
        )}
        <div className="create-task">
          <CreateTask id={id} />
        </div>
        {/* <div className="user-dashboard-cards"> */}
        <Container>
          {tasks &&
            tasks.map(
              (task) =>
                task.story === id && <TaskCard key={task.id} task={task} />
            )}
        </Container>
      </div>
    </div>
    // </div>
  );
};
export default Story;
