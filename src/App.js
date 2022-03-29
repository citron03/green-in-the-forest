import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import Main from './pages/Main';

const App = () => {

  return (
    <div className="App">
      <div>version 6 test</div>
      <BrowserRouter>
        <div>
          <button> <Link to='/'>Home</Link> </button>
        </div>
        <Main/>
      </BrowserRouter>      
    </div>
  );
}


export default App;
