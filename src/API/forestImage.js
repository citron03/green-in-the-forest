import XMLParser from 'react-xml-parser';

const parseStr = (dataSet, imagesArr, num, setDataObj) => {

    // console.log(dataSet);
    const dataXml = new XMLParser()
        .parseFromString(dataSet)
        .children;

    const image = dataXml[1].getElementsByTagName("imgfilename"); // 이미지 경로
    const arr = [];
    // 하나의 식물에 여러개의 사진이 존재한다.
    for(let i of image){
        arr.push(urlImage(i.value));
    }
    imagesArr.push(arr); // 모은 이미지를 저장한다.
    if(imagesArr.length === num){
        // 이미지 데이터 모두 저장 완료
        // state에 이미지 데이터 저장
        setDataObj(prev => {
            return {
                ...prev, image : imagesArr,
            }
        })
    }
}

// make URL
const urlImage = (value) => {
    const imageUrl = `http://www.forest.go.kr/images/data/down/story/${value}`;
    return imageUrl;
}

const forestImage = (index, setDataObj) => {

    const imagesArr = []; // state에 저장할 이미지의 모음
    const num = index.length;

    for(let i of index){
        const url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryImgOpenAPI?searchWrd=${i.value}&ServiceKey=${process.env.REACT_APP_FOREST_API}`;
        // 받아온 인덱스로 이미지를 가져온다.
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
            .then(el => el.text())
            .then(ele => parseStr(ele, imagesArr, num, setDataObj))
            .catch(err => console.log(err));
    }
    // 이미지 데이터들을 다 받아온 뒤에 parseImage로 실제 이미지를 받는다.
}

export default forestImage;