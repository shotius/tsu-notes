import React from 'react'
import { Notes } from '../components/notes'
import {AddNoteForm} from '../components/form'

export function NotesPage(props) {
  return (
    <>
      <AddNoteForm handleAddition={props.addNote}/>
      <Notes
        notes={props.notes}
        removeNote={props.removeNote}
        getNote={props.getNote}
      />
    </>
  )
}
