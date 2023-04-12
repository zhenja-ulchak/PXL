
import './App.css';
import Header  from "./Header";
import Footers from './Foot';
import Content from './Content';

function App() {

  const restt = () =>{
    const names = {
      name: "olexander",
      old: 25 , 
    }
    return names
  } 
  const r = restt();
  return (
    <div className="App">
     
        <Header/>
       <Content/>
      <Footers/>
    </div>
  );
}

export default App;
