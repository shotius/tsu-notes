import React, {useState} from 'react';
import {useHistory, useParams} from "react-router-dom";

const EditNote = ({notes, handleEditNote}) => {
  const params = useParams() // to get id from url
  const note = notes.find(note => note.id === parseInt(params.id));
  
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const history = useHistory() // to go back after edit

  const handleEditClick = (e) => {
    e.preventDefault()
    if (title || body) {
      const newNote = {...note, body, title}
      handleEditNote(newNote, () => history.goBack())
    }
  }

  return (
    <div>
      <form>
        <h2>Edit Note</h2>
        <div className="form-group">
          
          <label htmlFor="title"><b>title</b></label>
          <input 
            type="text" 
            value={title} 
            className="form-control" 
            id="title" 
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            />
          
          <label htmlFor="body"><b>body</b></label>
          <input 
            type="text" 
            value={body} 
            className="form-control" 
            id="body" 
            placeholder="body"
            onChange={(e) => setBody(e.target.value)}
            />
       
        </div>
        <button onClick={handleEditClick} className='btn btn-primary' type="text">Edit</button>
      </form>
    </div>
  )
}

export default EditNote