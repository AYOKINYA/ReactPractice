// Action은 상태 변경을 일으키는 이벤트에 대한 정적인 정보이다.
// Reducer가 Action과 이전 state을 참고해서 새로운 state를 만들기 때문에 
// Action은 reducer가 구분 할 수 있도록 
// 액션의 이름(타입) 과 데이터를 가진 객체형식이다. 


export const increment = () => {
    return {
        type: "INCREMENT"
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT"
    };
};