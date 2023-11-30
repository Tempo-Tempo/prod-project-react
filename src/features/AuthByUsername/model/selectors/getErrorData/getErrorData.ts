import { StateSchema } from 'app/providers/StoreProvider';

export const getErrorData = (state: StateSchema) => state?.loginForm?.error;
