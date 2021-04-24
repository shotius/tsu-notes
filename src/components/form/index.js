import React from 'react'
import "./style.css"

export const AddNoteForm = ({handleAddition}) => {
    return (
        <form>
            <div className="form-group">
            <label><b>Create New Note</b></label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Note" />
            </div>
            <button className='btn btn-primary' type="text">Add Note</button>
        </form>
)
}

