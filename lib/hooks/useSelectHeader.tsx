import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store/header.slice";

export default function useSelectHeader() {
    
    const selectedHeader = useSelector((state: any)=>state.selectedHeader.id);
    const dispatch = useDispatch();

    function setHeader(id: string) {
        dispatch(headerActions.selectHeader(id));
    }
  
    return {selectedHeader, setHeader};
}