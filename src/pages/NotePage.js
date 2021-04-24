import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function NotePage({ id }) {
  const [note, setNote] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/todos/${id}`)
      .then(({data}) => setNote(data))
  }, [])

  return (
    <div className='container'>
      {note ? (
        <>
          <p>id: {note.id}</p>
          <p>title: {note.title}</p>
          <p>userId: {note.userId}</p>
          <p>completed: {note.completed?.toString()}</p>
        </>
      ) : null}
    </div>
  )
}
