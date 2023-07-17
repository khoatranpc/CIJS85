import { useCreateStoreValue } from "../utils/hooks";
import StoreContext from "./StoreContext";
import { callApiOverViewBills } from "./overviewBills.data";

const ContextComponent = (props) => {
    const overviewBills = useCreateStoreValue(callApiOverViewBills);
    
    return (
        <StoreContext.Provider value={{
            overviewBills
        }} >
            {props.children}
        </StoreContext.Provider >
    )
};
export default ContextComponent;