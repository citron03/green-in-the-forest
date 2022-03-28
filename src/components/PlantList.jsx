import styled from "styled-components";
import forestData from '../API/forestData';
import { useState, useEffect } from "react";

const ListContainer = styled.div`
    border: 1px solid black;
`;

const PlantList = ({search}) => {

    const [dataObj, setDataObj] = useState({}); // API로 search가 바뀔 때 마다 데이터를 받아온다.
    const [dataManufactureArr, setDataManufactureArr] = useState([]);

    useEffect(() => {
        forestData(search, setDataObj); // 데이터를 가져오는 API에서 이미지 API를 불러 이미지도 dataArr에 저장하게 한다.
    }, [search])

    useEffect(() => {
        // 데이터를 가공한다.
        if(dataObj.index && dataObj.image && dataObj.lifetime && dataObj.index){
            // 모든 데이터가 들어왔을 때 데이터를 배열의 형태로 가공
            const tmpOuterArr = [];
            let name = Object.values(dataObj.name);
            let image = Object.values(dataObj.image);
            let lifeTime = Object.values(dataObj.lifetime);
            let index = Object.values(dataObj.index);
            for(let i = 0; i < dataObj.index.length; i++){
                // 인덱스, 이름, 일생, 이미지 순서대로 저장
                tmpOuterArr.push([index[i].value, name[i].value, lifeTime[i].value, image[i]]);
            }
            setDataManufactureArr(tmpOuterArr);
        }
    }, [dataObj])

    return <ListContainer>{console.log(dataManufactureArr)}</ListContainer>
}

export default PlantList;