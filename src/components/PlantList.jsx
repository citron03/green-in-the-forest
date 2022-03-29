import styled from "styled-components";
import { useState, useEffect } from "react";
import PlantView from "./PlantView";
import Loading from "./Loading";
import NoSearchData from './NoSearchData';
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/action";

const ListContainer = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;

const PlantList = ({search}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [NoData, setNoData] = useState(false);
    const dataObj = useSelector(state => state.fetchReducer);
    const dispatch = useDispatch(); // Hook으로 전역 상태 변경

    useEffect(() => {
        setIsLoading(true); // 로딩 시작
        dispatch(setData(search)); // 데이터를 가져오는 API에서 이미지 API를 불러 이미지도 dataArr에 저장하게 한다.
    }, [search])

    useEffect(() => {
        // 데이터를 가공한다.
        if(dataObj.length > 0){
            setIsLoading(false); // 로딩 끝
            setNoData(false); // 검색 결과 있음
        } else {
            // 검색 결과 없음
            setIsLoading(false); // 로딩 끝
            setNoData(true); // 검색 결과가 없음
        }
    }, [dataObj]);

    return <ListContainer>
        {isLoading ? <Loading/> : 
            NoData ? <NoSearchData/> :
                dataObj
                    .map(el => {
                        return <PlantView key={el[0]} name={el[1]} lifeTime={el[2]} image={el[3]} num={el[0]} />})
            }</ListContainer>
}

export default PlantList;