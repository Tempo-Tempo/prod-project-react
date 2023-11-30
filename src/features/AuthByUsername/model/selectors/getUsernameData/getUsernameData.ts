import { StateSchema } from 'app/providers/StoreProvider';

export const getUsernameData = (state: StateSchema) => state?.loginForm?.username;
