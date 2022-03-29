import { useState, useRef } from "react";
import PlantList from "../components/PlantList";
import { Route, Routes } from "react-router-dom";
import PlantDetail from '../components/PlantDetail';

const Main = () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const searchInput = useRef();

    // input에 onChange로 검색어를 관리하면, 너무 많이 API 요청이 발생한다. 
    // useRef로 버튼이 눌렸을 때 API 요청이 발생하도록 한다.
    const searchHandle = () => {
        setSearchKeyword(searchInput.current.value);
    }

    return (<div>
        <h1>메인 페이지</h1>
        <label>검색 하세요</label>
        <input type="text" ref={searchInput} placeholder="찾고 싶은 숲속 식물이 있나요?"/>
        <button onClick={searchHandle}>검색!</button>
        <Routes>
            <Route exact path="/" element={<PlantList search={searchKeyword}/>} />
            <Route path="/plant" element={<PlantDetail/>} />
            <Route path="/plant/:num" element={<PlantDetail/>} />
        </Routes>
    </div>)
}

export default Main;