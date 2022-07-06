import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from '../redux/action-creators/movies'

export const useReduxActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}