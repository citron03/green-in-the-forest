import { useState, useRef } from "react";
import PlantList from "../components/PlantList";
import { Route, Routes, Link } from "react-router-dom";
import PlantDetail from '../components/PlantDetail';
import styled from "styled-components";

const MainDiv = styled.div`
    a {
        text-decoration: none;
        color: black;
    }
    button {
        border-radius: 18px;
        margin: 10px;
        padding: 8px;
        height: fit-content;
        background-color: white;
    }
    
    input {
        padding: 8px;
        margin: 3px;
    }
`;

const MainHeaderContainer = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
`;

const SearchContainer = styled.div`
    margin: 3px;
`;

const Main = () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const searchInput = useRef();

    // input에 onChange로 검색어를 관리하면, 너무 많이 API 요청이 발생한다. 
    // useRef로 버튼이 눌렸을 때 API 요청이 발생하도록 한다.
    const searchHandle = () => {
        setSearchKeyword(searchInput.current.value);
    }

    return (<MainDiv>
        <MainHeaderContainer>
            <h1>Green In The Forest</h1>
            <button> <Link to='/'>Home</Link> </button>
        </MainHeaderContainer>
        <SearchContainer>
            <label>Search by name </label>
            <input type="text" ref={searchInput} placeholder="찾고 싶은 숲속 식물이 있나요?"/>
            <button onClick={searchHandle}>
                <Link to='/'>Search</Link>
            </button>
        </SearchContainer>
        <Routes>
            <Route exact path="/" element={<PlantList search={searchKeyword}/>} />
            <Route path="/plant" element={<PlantDetail/>} />
            <Route path="/plant/:num" element={<PlantDetail/>} />
        </Routes>
    </MainDiv>)
}

export default Main;