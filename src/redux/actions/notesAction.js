import axios from 'axios'
const base_url = 'http://localhost:3001'

export const getNotes = () => {
    return (dispatch) => {
        dispatch(getNotesStart())
        axios
            .get(`${base_url}/notes`)
            .then(({data}) => dispatch(getNotesSuccess(data)))
            .catch(err => dispatch(getNotesFail(err)))
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch(deleteNoteStart())
        axios
            .delete(`http://localhost:3001/notes/${id}`)
            .then(() => {
                dispatch(deleteNoteSuccess())
                dispatch(getNotes())
            })
            .catch(error => dispatch(deleteNoteFail(error)))
    }
}

/* geting notes */

const getNotesStart = () => ({
    type: 'START_FETCHING_NOTES'
})

const getNotesSuccess = (notes) => ({
    type: 'GET_NOTES_SUCCESS',
    notes,
})

const getNotesFail = (error) => ({
    type: 'GET_NOTES_FAIL',
    error,
})

/* deleting note */

const deleteNoteStart = () => ({
    type: 'START_DELETE_NOTE'
})

const deleteNoteSuccess = () => ({
    type: 'DELETE_NOTES_SUCCESS'
})

const deleteNoteFail = (error) => ({
    type: 'DELETE_NOTE_FAIL',
    error
})