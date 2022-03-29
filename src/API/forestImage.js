import XMLParser from 'react-xml-parser';

const parseStr = (dataSet) => {

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

    return arr;
}

// make URL
const urlImage = (value) => {
    const imageUrl = `http://www.forest.go.kr/images/data/down/story/${value}`;
    return imageUrl;
}

const forestImage = async (obj) => {
    // 이미지 역시 비동기로 불러와야 한다.
    const imagesArr = []; // state에 저장할 이미지의 모음
    const num = obj.index.length;

    for(let i of obj.index){
        const url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryImgOpenAPI?searchWrd=${i.value}&ServiceKey=${process.env.REACT_APP_FOREST_API}`;
        // 받아온 인덱스로 이미지를 가져온다.
        const imageData = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
            .then(el => el.text())
            .then(ele => parseStr(ele, imagesArr, num, obj))
            .catch(err => console.log(err));
        imagesArr.push(imageData);
    }
    return {
        ...obj,
        image: imagesArr,
    };
}

export default forestImage;