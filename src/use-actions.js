import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";

export const useActions = (actions) => {
    const dispatch = useDispatch();
    // using use memo here is basically helpful as actions and dispatch are same objects and no
    // need to generate this objects again.
    return useMemo(() =>  bindActionCreators(actions, dispatch), [actions, dispatch] );
}