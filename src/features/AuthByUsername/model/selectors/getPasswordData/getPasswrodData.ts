import { StateSchema } from 'app/providers/StoreProvider';

export const getPasswordData = (state: StateSchema) => state?.loginForm?.password;
