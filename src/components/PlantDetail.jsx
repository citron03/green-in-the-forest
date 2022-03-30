import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PlantDetailContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 0.1rem solid green;
`;

const PlantDetail = () => {
    const param = useParams();
    const state = useSelector(state => state.fetchReducer);
    const detailData = state.filter(el => el.index === param.num)[0];

return (<PlantDetailContainer>
        <p>{detailData.name}</p>
        <p>{detailData.guide}</p>
        <p>서식 장소 : {detailData.inhabit}</p>
        <p>{detailData.lifeTime}</p>
        {detailData.image.map((el, idx) => {
            return <img src={el} key={idx} alt={idx} />
        })}
        <p>식물 자료 제공 : {detailData.register}</p>
    </PlantDetailContainer>);
}

export default PlantDetail;