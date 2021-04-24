import axios from 'axios'
const base_url = 'http://localhost:3001'

export const getNotes = () => {
    dispatch(getNotesStart())
    return (dispatch) => {
        axios
            .get(`${base_url}/notes`)
            .then(({data}) => dispatch(getNotesSuccess(data)))
            .catch(err => dispatch(getNotesFail(err)))
    }
}

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