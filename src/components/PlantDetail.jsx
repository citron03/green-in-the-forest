import { useParams } from "react-router-dom";

const PlantDetail = () => {
    let param = useParams();
    console.log(param);
    return <h1>디테일한 데이터</h1>
}

export default PlantDetail;