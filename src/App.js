import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from './pages/Main';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        <Footer/>
      </BrowserRouter>      
    </div>
  );
}


export default App;
