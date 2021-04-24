import React, { useState } from 'react'
import "./style.css"

export const AddNoteForm = ({handleAddition}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newNote = {
            title, body
        }
        handleAddition(newNote)
        setTitle('')
        setBody('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label><b>Create New Note</b></label>
            <input 
                type="text" 
                className="form-control" 
                id="editTitle" 
                placeholder="title"
                value={title}
                onChange={({target}) => setTitle(target.value)}
                />
            <input 
                type="text" 
                className="form-control" 
                id="editTitle" 
                placeholder="body"
                value={body}
                onChange={({target}) => setBody(target.value)}
                />
            </div>
            <button className='btn btn-primary' type="text">Add Note</button>
        </form>
)
}

