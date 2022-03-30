import XMLParser from 'react-xml-parser';
import forestImage from './forestImage';

const parseStr = (dataSet) => {
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
            const guide = dataXml[1].getElementsByTagName("fsguide"); // 식물에 대한 안내
            const inhabit = dataXml[1].getElementsByTagName("fsinhabit"); // 서식 장소
            const register = dataXml[1].getElementsByTagName("fsregister"); // 식물자료제공
            const offer = dataXml[1].getElementsByTagName("fsoffer"); // 식물이야기 설명

           resolve({name, lifetime, index, guide, inhabit, register, offer}); // 객체 형태로 데이터 전달
        } else {
           reject(new Error("데이터를 불러올 수 없습니다."));
        }
     });
}

const forestData = async (item = "") => {

    let url = `/fStoryOpenAPI?ServiceKey=${process.env.REACT_APP_FOREST_API}`;
    if(item !== ""){
        // 검색 키워드가 있는 경우
        url = `/fStoryOpenAPI?searchWrd=${item}&ServiceKey=${process.env.REACT_APP_FOREST_API}`;
    }
    const fetchData = await fetch('/api' + url)
        .then(el => el.text())
        .then(ele => parseStr(ele))
        .then(obj => forestImage(obj)) // parseStr는 Promise 객체를 반환한다. 인덱스를 바탕으로 이미지를 세팅한다.
        .catch(err => console.log(err));

    return new Promise((resolve, reject) => {
        if(fetchData){
            resolve(fetchData);
        }else {
            reject(new Error("데이터 불러오기 실패"));
        }
    });
}

export default forestData;