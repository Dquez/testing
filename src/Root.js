import React from "react";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "reducers";

export default ({children, initialState = {}}) => {
    // const createStoreWithMiddleware = createStore(reducers, initialState, applyMiddleware(ReduxPromise))  store={createStoreWithMiddleware}
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    return(
     // data returned from reducers acts as redux store
    <Provider store={createStoreWithMiddleware(reducers, initialState)}>
        {children}
    </Provider>
   )    
}