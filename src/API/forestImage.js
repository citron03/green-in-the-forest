import XMLParser from 'react-xml-parser';

const parseStr = (dataSet) => {
    // console.log(dataSet);
    const dataXml = new XMLParser()
        .parseFromString(dataSet)
        .children;

    const image = dataXml[1].getElementsByTagName("imgfilename"); // 이미지 경로
    
    // 하나의 식물에 여러개의 사진이 존재한다.
    for(let data of image){
        parseImage(data.value);
    }
}

const parseImage = async (value) => {
    const imageUrl = await `http://www.forest.go.kr/images/data/down/story/${value}`;
    console.log(imageUrl);
}

const forestImage = (index) => {
    const url = `http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryImgOpenAPI?searchWrd=${index}&ServiceKey=${process.env.REACT_APP_FOREST_API}`;

    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(el => el.text())
        .then(ele => parseStr(ele))
        .catch(err => console.log(err));
}

export default forestImage;