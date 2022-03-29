import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PlantDetail = () => {
    const param = useParams();
    const state = useSelector(state => state.fetchReducer);
    const detailData = state.filter(el => el[0] === param.num);

    return (<div>
        <p>{detailData[0][1]}</p>
        <p>{detailData[0][2]}</p>
        {detailData[0][3].map((el, idx) => {
            return <img src={el} key={idx} alt={idx} />
        })}
    </div>);
}

export default PlantDetail;