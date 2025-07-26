import { useDispatch, useSelector } from "react-redux";
import { selectedActions } from "../store/selected.slice";

export default function useSelectId() {
    
    const selectedId = useSelector((state: any)=>state.selected.id);
    const dispatch = useDispatch();

    function setSelectId(id: string) {
        dispatch(selectedActions.selectId(id));
    }

    function resetSelectId() {
        dispatch(selectedActions.reset());
    }

    function toggleSelectId(id: string) {
        if (selectedId === id) {
            dispatch(selectedActions.reset());
        } else {
            dispatch(selectedActions.selectId(id));
        }
    }

    function getSelectedClass(condition: boolean) {
        if (condition) {
            return 'selected';
        }
        return 'notSelected';
    }
   
    return {selectedId, toggleSelectId, setSelectId, resetSelectId, getSelectedClass};
}