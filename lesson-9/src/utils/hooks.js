import { useState } from "react"

const useCreateStoreValue = (callBackCallApi, ...handleState) => {
    const [state, setState] = useState({
        data: null,
        isLoading: false
    });
    const handleData = () => {
        callBackCallApi(setState);
    }
    return {
        ...state,
        handleData
    }
};

export {
    useCreateStoreValue
}