import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main from './pages/Main';

const App = () => {

  return (
    <div className="App">
      <div>version 6 test</div>
      <BrowserRouter>
        <div>
          <button> <Link to='/'>컴포넌트 1 가기</Link> </button>
        </div>
        <Routes>
            <Route exact path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}


export default App;
