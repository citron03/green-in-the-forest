import XMLParser from 'react-xml-parser';
import forestImage from './forestImage';

const parseStr = (dataSet, setDataObj) => {
    // 이미지를 동기적으로 불러오기 위해서 Promise 객체로 반환한다.
    return new Promise((resolve, reject) => {
        if (dataSet) {
            // console.log(dataSet);
            const dataXml = new XMLParser()
                .parseFromString(dataSet)
                .children;

            const name = dataXml[1].getElementsByTagName("fskname"); // 식물명
            const lifetime = dataXml[1].getElementsByTagName("fslifetime"); // 식물의 일생
            const index = dataXml[1].getElementsByTagName("fslistno"); // 숲이야기순번 --> 이미지 검색에 사용된다.
            
            // console.log(lifetime[0].value);
            setDataObj({
                name, lifetime, index
            });            
           resolve(index); // index 정보를 넘겨주어 이미지를 불러올 수 있게 한다.
        } else {
           reject(new Error("데이터를 불러올 수 없습니다."));
        }
     });
}

const forestData = async (item = "", setDataObj) => {

    let url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?ServiceKey=${process.env.REACT_APP_FOREST_API}`;
    if(item !== ""){
        // 검색 키워드가 있는 경우
        url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?searchWrd=${item}&ServiceKey=${process.env.REACT_APP_FOREST_API}`;
    }
    const detchData = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(el => el.text())
        .then(ele => parseStr(ele, setDataObj))
        .then(idx => forestImage(idx, setDataObj)) // parseStr는 Promise 객체를 반환한다. 인덱스를 바탕으로 이미지를 세팅한다.
        .catch(err => console.log(err));
        
    // console.log(detchData);
    // return detchData;
}

export default forestData;