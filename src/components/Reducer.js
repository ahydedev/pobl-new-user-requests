const Reducer = ( state, action ) => {
    
    switch ( action.type ) {
        case 'CREATE':
            return {
                ...state,
                userRequests: [ ...state.userRequests, action.payload ]
            }
    
        case 'UPDATE':
            const updatedRequests = state.userRequests.map(request => {
                if (request.id === action.payload) {
                return { ...request, completed: true };
                }
                return request;
            });
            return {
                ...state,
                userRequests: updatedRequests
            };

        case 'DELETE':    
            return {
                ...state, 
                userRequests: state.userRequests.filter(request => request.id !== action.payload)
            };
            

        default:
            return state; 
    }
}

export default Reducer;
