import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import  React, {useState} from 'react';
import Alert from './components/Alert';
function App() {
  const [mode,setMode] = useState('light');
  const [mode1,setMode1] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.color = 'white';
    document.body.style.backgroundColor = '#500b58';
    showAlert("Dark Mode has been enabled","success");
  }else{
    setMode('light');
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    }
  }
  const toggleMode1 = ()=>{
    if(mode1 === 'light'){
    setMode1('dark');
    document.body.style.color = 'white';
    document.body.style.backgroundColor = '#87305b';
    showAlert("Pink Mode has been enabled","success");
  }else{
    setMode1('light');
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar title='Cristiano Ronaldo' about='About us'  mode={mode} mode1={mode1} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
    <Alert alert={alert}/>
    <div className="container">
    <Textform  showAlert={showAlert} mode={mode} mode1={mode1}/>
    </div>
    </>
  );
}

export default App;
