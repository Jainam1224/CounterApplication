import { useSelector } from "react-redux"
import { useActions } from "./use-actions";
import {increment, decrement, set} from './actions'

// custom hooks
export const useCounter = () => {
    const count = useSelector((state) => state.count);
    const actions = useActions({ increment, decrement, set });

    // here we are passing this ...actions as it has multiple functions inside it.
    return { count, ...actions };
}