import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoadingData = (state: StateSchema) => state?.loginForm?.isLoading;
