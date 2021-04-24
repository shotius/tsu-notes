import React from 'react'

const EditNote = () => {
    return (
        <div>
            <form>
                <h2>Edit Note</h2>
                <div className="form-group">
                <label><b>title</b></label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="title" />
                </div>
                <button className='btn btn-primary' type="text">Add Note</button>
            </form>    
        </div>
    )
}