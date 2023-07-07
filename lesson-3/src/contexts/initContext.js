import { createContext } from "react";

const StoreContext = createContext({
    commonState: {
        theme: 'LIGHT',
        lang: 'VI'
    },
    setCommonState: (field, value) => { }
});

export default StoreContext;