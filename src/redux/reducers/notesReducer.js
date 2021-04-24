const initState = {
    notes : [],
    getNotesError: null,
    getNotesLoading: false,
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
        case 'START_DELETE_NOTE':
            return {
                ...state,
                deleteNoteLoading: true,
                deleteNoteError: null
            }
        case 'DELETE_NOTES_SUCCESS':
            return {
                ...state,
                deleteNoteError: null,
                deleteNoteLoading: false,
            }
        case 'DELETE_NOTE_FAIL': 
            return {
                ...state,
                deleteNoteLoading: false,
                deleteNoteError: action.error
            }
        case 'START_ADD_NEW_NOTE':
            return {
                ...state,
                addNoteLoading: true,
                addNoteError: null
            }
        case 'ADD_NOTE_SUCCESS':
            return {
                ...state,
                addNoteLoading: false,
                addNoteError: null,
            }
        case 'ADD_NOTE_FAIL':
            return {
                ...state,
                addNoteLoading: false,
                addNoteError: action.error
            }
        default: 
            return state
    }
}