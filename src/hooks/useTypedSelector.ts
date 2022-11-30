import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
