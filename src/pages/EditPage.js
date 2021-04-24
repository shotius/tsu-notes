import React, {useState} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const EditNote = ({notes, setNotes}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory()
  const params = useParams()
  const note = notes.find(note => note.id === parseInt(params.id));

  const handleClick = (e) => {
    e.preventDefault()
    if (title || body) {
      axios
        .put(`http://localhost:3001/notes/${note.id}`, {...note, title, body})
        .then(response => {
          const newNotes = notes.map(note => note.id === response.data.id ? response.data : note)
          setNotes(newNotes)
          history.goBack()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div>
      <form>
        <h2>Edit Note</h2>
        <div className="form-group">
          <label htmlFor="title"><b>title</b></label>
          <input type="text" value={title} className="form-control" id="title" placeholder="title"
                 onChange={(e) => setTitle(e.target.value)}/>
          <label htmlFor="body"><b>body</b></label>

          <input type="text" value={body} className="form-control" id="body" placeholder="body"
                 onChange={(e) => setBody(e.target.value)}/>
        </div>
        <button onClick={handleClick} className='btn btn-primary' type="text">Edit</button>
      </form>
    </div>
  )
}

export default EditNote