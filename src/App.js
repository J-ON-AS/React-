import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import  React, {useState} from 'react';
function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.color = 'white';
    document.body.style.backgroundColor = '#500b58';
  }else{
    setMode('light');
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title='Cristiano Ronaldo' about='About us'  mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Textform  mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
