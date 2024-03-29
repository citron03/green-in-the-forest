# green-in-the-forest
## 숲에서 만날 수 있는 식물들

### 배포 사이트 : https://green-in-the-forest.netlify.app/
[![Netlify Status](https://api.netlify.com/api/v1/badges/d9dd7f53-9812-41c5-90a9-002b922da275/deploy-status)](https://app.netlify.com/sites/green-in-the-forest/deploys)

* 공공데이터 OpenAPI - 산림청 숲에 사는 식물정보를 사용한 식물 검색 웹 사이트

* 이 웹사이트에 사용된 폰트는 마포구의 마포꽃섬입니다.
* 이 웹사이트는 grid 레이아웃을 사용하여, PC에 최적화 되어있습니다.
* netlify를 통해 배포하였습니다.
* react-xml-parser을 이용하여 XML을 파싱하였다.
* http-proxy-middleware 라이브러리를 통해서 cors 문제를 해결하였다.
* 파라미터를 이용한 동적 라우팅 구현
* useParams를 통해서 데이터의 인덱스를 전달했다.
* 동적 라우팅으로 전달할 수 있는 데이터의 한계와, 하루 트래픽량이 정해진 OPEN API의 한계로 인해 디테일 컴포넌트에서 API 호출을 다시 하지 않고, 처음의 API 호출 데이터를 redux를 통해 전역으로 저장하여 디테일 컴포넌트에서 재사용한다.
* redux를 사용하며 API 호출을 해야하는 문제로, redux-thunk를 redux의 비동기 처리를 한다.
