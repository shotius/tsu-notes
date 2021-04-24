const initState = {
    notes : [],
    getNotesError: null,
    getNotesLoading: false
}

export default function notesReducer(state = initState, action) {
    switch(action.type){
        case 'START_FETCHING_NOTES':
            return {
                ...state,
                getNotesLoading: true,
                getNotesError: null
            }
        case 'GET_NOTES_SUCCESS': 
            return {
                ...state,
                notes: action.notes,
                getNotesLoading: false,
                getNotesError: null
            }
        case 'GET_NOTES_FAIL': 
            return {
                ...state,
                getNotesError: action.error,
                getNotesLoading: false
            }
        default: 
            return state
    }
}