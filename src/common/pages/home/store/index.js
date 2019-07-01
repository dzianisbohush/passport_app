// CONSTS
const HOME_INCREMENT = 'HOME_INCREMENT';
const HOME_DECREMENT = 'HOME_DECREMENT';

const initialState = {
  count: 0
};

// ACTIONS
export const onIncrement = () => ({
  type: HOME_INCREMENT
});

export const onDecrement = () => ({
  type: HOME_DECREMENT
});

// REDUCER
const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case HOME_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default home;
