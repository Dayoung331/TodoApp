import HelloWorld from "./practice/HelloWorld";
import CaptionImage from "./practice/CaptionImage";
import MyButton from "./practice/MyButton";
import CountComponent from "./practice/CountComponent";
import Toggle from "./practice/Toggle";
import ExampleUseState from "./practice/ExampleUseState";
import ForbiddenWords from "./practice/ForbiddenWords";
import Rendering from "./practice/Rendering";
import StopWatch from "./practice/StopWatch";
import Timer from "./practice/Timer";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapExample from "./practice/BootstrapExample";

function App() {
  return (
    <>
      <div>
        {/* <HelloWorld /> */}
        {/* <CaptionImage
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgF3QyigZ0q-GgNFPA54-MHndkhmr7rw5b0A&s"
          caption="이건 트럭입니다"
        /> */}
        {/* <MyButton
          title="네이버로 이동"
          color="green"
          clickUrl="https://www.naver.com"
        /> */}
        {/* <CountComponent /> */}
        {/* <Toggle /> */}
        {/* <ExampleUseState /> */}
        {/* <ForbiddenWords /> */}
        {/* <Rendering /> */}
        {/* <StopWatch /> */}
        {/* <Timer /> */}
        <TodoList />
        {/* <BootstrapExample /> */}
      </div>
    </>
  );
}

export default App;
