import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PlantDetailContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 0.1rem solid green;
    background-color: #e6eff0;
    img {
        height: 500px;
        width: auto;
        margin: 10px;
    }
`;

const PlantDetail = () => {
    const param = useParams();
    const state = useSelector(state => state.fetchReducer);

    if(!state[0]){
        return <p>올바르지 않은 접근 입니다.</p>
    }

    const detailData = state.filter(el => el.index === param.num)[0];

    return (
        <PlantDetailContainer>
            <h2>{detailData.name}</h2>
            <h3>{detailData.guide}</h3>
            <p>서식 장소 : {detailData.inhabit}</p>
            <p>{detailData.lifeTime}</p>
            {detailData.image.map((el, idx) => {
                return <img src={el} key={idx} alt={idx} />
            })}
            <p>식물 자료 제공 : {detailData.register}</p>
        </PlantDetailContainer>);
}

export default PlantDetail;