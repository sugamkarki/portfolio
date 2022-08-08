import logo from "./logo.svg";
import Desktop from "./containers/desktop/Desktop";
import TaskbarLeft from "./containers/taskbar-left/TaskbarLeft";
import TaskbarRight from "./containers/taskbar-right/TaskbarRight";
function App() {
  return (
    <>
      <main>
        <Desktop />
      </main>
      <footer>
        <TaskbarLeft />
        <TaskbarRight />
      </footer>
    </>
  );
}

export default App;
