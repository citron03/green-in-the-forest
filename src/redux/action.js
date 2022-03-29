import forestData from '../API/forestData';

export const FETCH_DATA = "FETCH_DATA";

// 미들웨어를 사용해 비동기로 dispatch
export const setData = (item = "") =>  async (dispatch) => {
    // 액션 객체를 리턴
    const plantData = await forestData(item);
    dispatch({ type: FETCH_DATA, payload: plantData })
}
