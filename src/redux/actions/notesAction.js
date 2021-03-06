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
            .delete(`${base_url}/notes/${id}`)
            .then(() => {
                dispatch(deleteNoteSuccess())
                dispatch(getNotes())
            })
            .catch(error => dispatch(deleteNoteFail(error)))
    }
}

export const addNote = (note) => {
    return (dispatch) => {
        dispatch(addNoteStart())
        axios
            .post(`${base_url}/notes`, note)
            .then(() => {
                dispatch(addNoteSuccess())
                dispatch(getNotes())
            })
            .catch(error => dispatch(addNoteFail(error)))
    }
}

export const editNote = (note, callback) => {
    return (dispatch) => {
        dispatch(editNoteStart())
        axios
            .put(`${base_url}/notes/${note.id}`, note)
            .then(() =>  {
                dispatch(getNotes())
                dispatch(editNoteSuccess())
                callback()
            })
            .catch(error => dispatch(editNoteFail(error)))
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

/* adding new note */

const addNoteStart = () => ({
    type: 'START_ADD_NEW_NOTE'
})

const addNoteSuccess = () => ({
    type: 'ADD_NOTE_SUCCESS'
})

const addNoteFail = (error) => ({
    type: 'ADD_NOTE_FAIL',
    error
})

/* edit Note */

const editNoteStart = () => ({
    type: 'EDIT_NOTE_START'
})

const editNoteSuccess = () => ({
    type: 'EDIT_NOTE_SUCCESS'
})

const editNoteFail = (error) => ({
     type: 'EDIT_NOTE_FAIL',
     error
 })