import {config} from './Config.js';
import {validate} from './Validate.js';
import {open} from './Search.js';
import * as icons from 'lucide-react';
import './App.css';


const valid = validate(config.icon, config['search-engine'])



const Icon = function(props) {
  const DynamicTag = icons[props.icon]  // <----------- dynamic tag name
  return <DynamicTag color="#a6e3a1" size="100px"></DynamicTag>;
};


const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
darkThemeMq.addListener(e => {
  if (e.matches) {
    document.getElementById('favicon').href = process.env.PUBLIC_URL + "/search-dark.ico"
  } else {
    document.getElementById('favicon').href = process.env.PUBLIC_URL + "/search-light.ico"
  }
});



if (valid == true) {
  // Keydown
  document.addEventListener('keydown', handleKeypress);
  
  function handleKeypress (e) {
    if (e.code == "Enter") {
      let search = document.getElementById('input').value
      open(search)
    }
  }
}





function App() {
  if (valid == true) {
    return (
      <div className="App">
        <h1 className="header">
          <Icon icon={config.icon}></Icon>
          Startpage
        </h1>
      
        <div className="main">
          <input type="text" className='input' placeholder={config.placeholder} id="input"></input>
        </div>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <h1 className='header'>
          <Icon icon="Bomb"></Icon>
          Error! Your config is invalid!
        </h1>
      </div>
    )
  }
}

export default App;
