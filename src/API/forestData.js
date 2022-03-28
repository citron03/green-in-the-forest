import XMLParser from 'react-xml-parser';

const parseStr = (dataSet, setDataArr) => {
    // console.log(dataSet);
    const dataXml = new XMLParser()
        .parseFromString(dataSet)
        .children;

    const name = dataXml[1].getElementsByTagName("fskname"); // 식물명
    const lifetime = dataXml[1].getElementsByTagName("fslifetime"); // 식물의 일생
    const index = dataXml[1].getElementsByTagName("fslistno"); // 숲이야기순번 --> 이미지 검색에 사용된다.
    
    // console.log(lifetime[0].value);
    setDataArr({
        name, lifetime, index
    });
}

const forestData = (item = "", setDataArr) => {
    let url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?ServiceKey=${process.env.REACT_APP_FOREST_API}`;
    if(item !== ""){
        // 검색 키워드가 있는 경우
        url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?searchWrd=${item}&ServiceKey=${process.env.REACT_APP_FOREST_API}`;
    }
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(el => el.text())
        .then(ele => parseStr(ele, setDataArr))
        .catch(err => console.log(err));
}

export default forestData;