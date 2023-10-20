import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
function App() {
  return (
    <>
    <Navbar title='Cristiano Ronaldo' about='About us' />
    <div className="container">
    <Textform />
    </div>
    
    </>
  );
}

export default App;
