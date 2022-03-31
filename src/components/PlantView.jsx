import styled from "styled-components";
import { Link } from "react-router-dom";

const HoverOfferSpan = styled.span`
    opacity: 0;
    transition: opacity 0.1s linear;
    position: relative;
    bottom: 12rem;
    font-size: 2rem;
    color: black;
    text-decoration: none;
`;

const ImageAndNameDiv = styled.div`
    color: black;
`;

const PlantViewContainer = styled.div`
    border: 1px solid black;
    border-radius: 50px;
    background-color: #e6f3eb;
    padding: 1.5rem;
    margin: 1.5rem;
    opacity: 1;
    &:hover{
        cursor: pointer;
        ${HoverOfferSpan} {
          opacity: 1;
        }
        ${ImageAndNameDiv}{
            opacity: 0.3;
        }
    }
`;


const PlantView = ({num, name, image, offer}) => {

    return (
    <Link to={`plant/${num}`} style={{"textDecoration": "none"}}>
        <PlantViewContainer>
            <ImageAndNameDiv>
                <h3>{name}</h3>
                <img src={image[0]} alt={name} />
            </ImageAndNameDiv>
            <HoverOfferSpan>{offer}</HoverOfferSpan>
        </PlantViewContainer>
    </Link>
    )
}

export default PlantView;