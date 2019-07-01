// CONSTS
const EDIT_INCREMENT = 'EDIT_INCREMENT';
const EDIT_DECREMENT = 'EDIT_DECREMENT';

const initialState = {
  count: 0
};

// ACTIONS
export const onIncrement = () => ({
  type: EDIT_INCREMENT
});

export const onDecrement = () => ({
  type: EDIT_DECREMENT
});

// REDUCER
const edit = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case EDIT_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default edit;
