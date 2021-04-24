import React from 'react'
import { useHistory } from 'react-router-dom'

export function Note({ note, handleRemove, handleEdit }) {
  const history = useHistory()

  const getNote = (id) => {
    history.push(`./note/${id}`)
  }

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div onClick={() => getNote(note.id)}>{note.title}</div>
      <div>
        <button 
          className='btn btn-sm btn-outline-primary'
          style={{marginRight: '10px'}}
          onClick={handleEdit}
        >
          edit
        </button>
        <button
          className='btn btn-sm btn-outline-danger'
          onClick={() => handleRemove(note.id)}
        >
          x
        </button>
      </div>
    </li>
  )
}
