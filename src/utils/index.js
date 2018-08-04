export const createReducer = (initialState, fnMap) => {
    return (state, action, ...rest) => {
      const { type } = action;
      const handler = fnMap[type];
      const newState = state || initialState;
  
      return handler ? handler(newState, action, ...rest) : newState;
    };
};