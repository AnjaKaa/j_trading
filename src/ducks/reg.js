import { handleActions, createActions } from 'redux-actions';

const { regRequest, regSuccess, regFailure } = createActions(
  'REG_REQUEST',
  'REG_SUCCESS',
  'REG_FAILURE',
);

const initialState = {
  isRegistered: false,
  regError: null,
};

export default handleActions(
  {
    [regRequest]: (state, action) => ({
      ...state,
      isRegistered: false,
      regError: null,
    }),

    [regSuccess]: (state, action) => ({
      ...state,
      isRegistered: true,
      regError: null,
    }),

    [regFailure]: (state, action) => ({
      ...state,
      isRegistered: false,
      regError: action.payload,
    }),
  },
  initialState,
);

export { regRequest, regSuccess, regFailure };

export const getIsRegistered = state =>
  state.registration ? state.registration.isRegistered : false;
export const getRegError = state => (state.registration ? state.registration.regError : false);
