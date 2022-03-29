import styled from "styled-components";
import forestData from '../API/forestData';
import { useState, useEffect } from "react";
import PlantView from "./PlantView";
import Loading from "./Loading";
import NoSearchData from './NoSearchData';

const ListContainer = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;

const PlantList = ({search}) => {

    const [dataObj, setDataObj] = useState({}); // API로 search가 바뀔 때 마다 데이터를 받아온다.
    const [dataManufactureArr, setDataManufactureArr] = useState([]); // map할 수 있게 배열로 가공된 데이터
    const [isLoading, setIsLoading] = useState(false);
    const [NoData, setNoData] = useState(false);

    useEffect(() => {
        setIsLoading(true); // 로딩 시작
        forestData(search, setDataObj); // 데이터를 가져오는 API에서 이미지 API를 불러 이미지도 dataArr에 저장하게 한다.
    }, [search])

    useEffect(() => {
        // 데이터를 가공한다.
        if(dataObj.index && dataObj.image && dataObj.lifetime && dataObj.index){
            setNoData(false); // 검색 결과가 존재
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
            setIsLoading(false); // 로딩 끝
            setDataManufactureArr(tmpOuterArr);
        } else {
            // 검색 결과 없음
            setIsLoading(false); // 로딩 끝
            setNoData(true); // 검색 결과가 없음
        }
    }, [dataObj])

    return <ListContainer>
        {isLoading ? <Loading/> : 
            NoData ? <NoSearchData/> :
                dataManufactureArr.map(el => {
                    return <PlantView key={el[0]} name={el[1]} lifeTime={el[2]} image={el[3]} num={el[0]} />
    })}</ListContainer>
}

export default PlantList;