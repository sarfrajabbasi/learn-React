import logo from './logo.svg';
import './App.css';
import{GreetingMe} from './components/myComp';
import Hello from './components/hello';
import Welcome from './components/welcomClass';
import Message from './components/message';
import Counter from './components/setState'
import FunctionClick, { ClassClick } from './components/eventHandling';
import EventBind from './components/bindingEventHandlers';
import ParentComponent from './components/methodsAsProps';
import UserGreeting from './components/condtional_Rendering';
import NameList from './components/list_rendering';
function App() {
  return (
    <div className="App">
      {/* <Hello name="World" occupation="nothing" >
        <p>hurrrrewwwww</p>
      </Hello> */}
      {/* <Hello name="sarfraj" occupation='developer' >
      <button>click Me</button>

      </Hello> */}
      {/* <Hello name="asif" occupation='developer' >
        Logo asif developer
      </Hello> */}
      {/* <GreetingMe></GreetingMe> */}
     {/* <Welcome name="hello" addMe ="group"></Welcome> */}
     {/* <Welcome name="hello" addMe ="group"></Welcome> */}
     {/* <Welcome name="hello" addMe ="group"></Welcome> */}
     {/* <Message></Message>
     <Counter></Counter>
     <FunctionClick></FunctionClick>
     <ClassClick></ClassClick> */}
     {/* <EventBind></EventBind> */}
     {/* <ParentComponent></ParentComponent> */}
     <UserGreeting></UserGreeting>
     <NameList></NameList>
    </div>
  );
}

export default App;

 