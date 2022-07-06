import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/movies";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector