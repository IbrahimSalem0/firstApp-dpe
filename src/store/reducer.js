export const initialState = { token: null, id: 0 };
export const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        token: action.token,
        id: action.id,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        token: action.token,
        id: action.id,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        token: null,
        id: 0,
      };
  }
};
