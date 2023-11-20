import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginData = (state: StateSchema) => state.loginForm;
