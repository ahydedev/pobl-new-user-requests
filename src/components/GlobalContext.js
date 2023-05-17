import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

// Create initial state object to store user requests array
let initialRequests = {
    userRequests: []
}

// Create new global context object to share data with app components
export const GlobalContext = createContext( initialRequests );

// Export context provider to give components access to data and reducer functions
export const GlobalProvider = ( { children } ) => {

    const [ state, dispatch ] = useReducer( Reducer, initialRequests );
    
    function addUserRequest( request ) {
        dispatch( {
            type: 'CREATE',
            payload: request
        })
    }

    function updateUserRequest( id ) {
        dispatch( {
            type: 'UPDATE',
            payload: id
        })
    }

    function deleteUserRequest( id ) {
        dispatch( {
            type: 'DELETE',
            payload: id
        })
    }

    return (
        
        <GlobalContext.Provider value={{ 
            
            userRequests: state.userRequests.flat(), 
            addUserRequest, 
            updateUserRequest,
            deleteUserRequest,
            // filterByBusinessArea 
            
            }}>
            
            { children }
            
        </GlobalContext.Provider>
    )
}
