// 리듀서에서 사용될 함수 데이터를 가공하여 map으로 사용하기 좋게 가공한다.

const dataManufacturetoArr = (dataObj) => {
    const output = [];

    if (dataObj.name && dataObj.image && dataObj.lifetime && dataObj.index) {
        // 모든 데이터가 들어왔을 때 데이터를 배열의 형태로 가공
        let name = Object.values(dataObj.name);
        let image = Object.values(dataObj.image);
        let lifeTime = Object.values(dataObj.lifetime);
        let index = Object.values(dataObj.index);
        let guide = Object.values(dataObj.guide);
        let inhabit = Object.values(dataObj.inhabit);
        let register = Object.values(dataObj.register);
        let offer = Object.values(dataObj.offer);
        for (let i = 0; i < dataObj.index.length; i++) {
            // 인덱스, 이름, 일생, 이미지 등을 객체로 저장
            output.push({
                index: index[i].value,
                name: name[i].value,
                lifeTime: lifeTime[i].value,
                image: image[i],
                guide: guide[i].value,
                inhabit: inhabit[i].value,
                register: register[i].value,
                offer: offer[i].value,
            });
        }
    }
    return output;
}

export default dataManufacturetoArr;