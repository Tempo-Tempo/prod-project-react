import { useDispatch } from 'react-redux';
import { DispathStoreType } from 'app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<DispathStoreType>();
