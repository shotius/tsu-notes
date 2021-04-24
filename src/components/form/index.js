import React, { useState } from 'react'
import "./style.css"

export const AddNoteForm = ({handleAddition}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // const newNote = {
        //     e.target
        // }
    }
    return (
        <form onSubmit={handleAddition}>
            <div className="form-group">
            <label><b>Create New Note</b></label>
            <input type="text" className="form-control" id="editTitle" placeholder="title" />
            </div>
            <button className='btn btn-primary' type="text">Add Note</button>
        </form>
)
}

