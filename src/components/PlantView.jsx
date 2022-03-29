import styled from "styled-components";
import { Link } from "react-router-dom";

const PlantViewContainer = styled.div`
    border: 1px solid purple;
    padding: 1.5rem;
    margin: 1.5rem;
    opacity: 1;
    &:hover{
        opacity: 0.75;
        cursor: pointer;
    }
`;


const PlantView = ({num, name, lifeTime, image}) => {
    return (
    <Link to={`plant/${num}`}>
        <PlantViewContainer>
            <p>{name}</p>
            <img src={image[0]} alt={name} />
        </PlantViewContainer>
    </Link>
    )
}

export default PlantView;