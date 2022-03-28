import styled from "styled-components";
import forestData from '../API/forestData';
import { useState, useEffect } from "react";

const ListContainer = styled.div`
    border: 1px solid black;
`;

const PlantList = ({search}) => {

    const [dataArr, setDataArr] = useState({}); // API로 search가 바뀔 때 마다 데이터를 받아온다.

    useEffect(() => {
        forestData(search, setDataArr); // 데이터를 가져오는 API에서 이미지 API를 불러 이미지도 dataArr에 저장하게 한다.
    }, [search])

    return <ListContainer>{console.log(dataArr)}</ListContainer>
}

export default PlantList;