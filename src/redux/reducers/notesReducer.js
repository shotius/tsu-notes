import { 
    START_FETCHING_NOTES,
    GET_NOTES_SUCCESS,
    GET_NOTES_FAIL,
    START_DELETE_NOTE,
    DELETE_NOTES_SUCCESS,
    DELETE_NOTE_FAIL,
    START_ADD_NEW_NOTE,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAIL,
    EDIT_NOTE_START,
    EDIT_NOTE_SUCCESS,
    EDIT_NOTE_FAIL
} from '../constants'

const initState = {
    notes : [],
    getNotesError: null,
    getNotesLoading: false,
}

export default function notesReducer(state = initState, action) {
    switch(action.type){
        case START_FETCHING_NOTES:
            return {
                ...state,
                getNotesLoading: true,
                getNotesError: null
            }
        case GET_NOTES_SUCCESS: 
            return {
                ...state,
                notes: action.notes,
                getNotesLoading: false,
                getNotesError: null
            }
        case GET_NOTES_FAIL: 
            return {
                ...state,
                getNotesError: action.error,
                getNotesLoading: false
            }
        case START_DELETE_NOTE:
            return {
                ...state,
                deleteNoteLoading: true,
                deleteNoteError: null
            }
        case DELETE_NOTES_SUCCESS:
            return {
                ...state,
                deleteNoteError: null,
                deleteNoteLoading: false,
            }
        case DELETE_NOTE_FAIL: 
            return {
                ...state,
                deleteNoteLoading: false,
                deleteNoteError: action.error
            }
        case START_ADD_NEW_NOTE:
            return {
                ...state,
                addNoteLoading: true,
                addNoteError: null
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                addNoteLoading: false,
                addNoteError: null,
            }
        case ADD_NOTE_FAIL:
            return {
                ...state,
                addNoteLoading: false,
                addNoteError: action.error
            }
        case EDIT_NOTE_START:
            return {
                ...state, 
                editNoteLoading: true,
                editNOteError: null
            }
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                editNoteLoading: false,
                editNoteError: null
            }
        case EDIT_NOTE_FAIL:
            return {
                ...state,
                editNoteLoading: false,
                addNoteError: action.error
            }
        default: 
            return state
    }
}