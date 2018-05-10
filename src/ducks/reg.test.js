import regReducer, { regRequest, regSuccess, regFailure } from '../registration';

describe('Reducers auth:', () => {
  it('Action registrationRequest - запрос на регистрацию пользователя', () => {
    const nextState = regReducer({ isRegistered: false }, regRequest());

    expect(nextState.isRegistered).toEqual(false);
  });

  it('Action registrationSuccess - пользователь зарегистрирован (isAuthorize = true)', () => {
    const nextState = regReducer({ isRegistered: true }, regSuccess());

    expect(nextState.isRegistered).toEqual(true);
  });

  it('Action registrationFailure - ошибка регистрации', () => {
    const error = new Error('Register error');
    const nextState = regReducer({ regError: null }, regFailure(error));

    expect(nextState.regError).toEqual(error);
  });
});
