import React, { useState } from 'react';
import StoreContext from './initContext';
import { LANG } from './dictionary';

const ComponentContext = (props) => {
    const [commonState, setCommonState] = useState({
        theme: 'LIGHT',
        lang: LANG.VI
    });
    const setFieldContext = (field, value) => {
        setCommonState({
            ...commonState,
            [field]: value
        });
    };
    return (
        <StoreContext.Provider value={{
            commonState: commonState,
            setCommonState: setFieldContext
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default ComponentContext;