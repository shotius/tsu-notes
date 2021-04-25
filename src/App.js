import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header} from './components/navbar'
import {Sidebar} from './components/sidebar'
import {MainPage} from './pages/MainPage'
import {NotesPage} from './pages/NotesPage'
import {NotePage} from './pages/NotePage'
import './App.css'
import EditPage from "./pages/EditPage";
import { getNotes, deleteNote, addNote, editNote } from './redux/actions/notesAction'
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notesReducer.notes)

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  return (
    <div className='App'>
      <Router>
        <Sidebar/>
        <Header/>
        <div className='content'>
          <Switch>
            <Route path="/note/:id/edit" >
              <EditPage 
                notes={notes}
                handleEditNote={(note, callback) => dispatch(editNote(note, callback))}/>
            </Route>
            <Route
              path='/note/:id'
              render={(props) => <NotePage id={props.match.params.id}/>}
            />
            <Route path='/notes'>
              <NotesPage
                notes={notes}
                removeNote={(id) => dispatch(deleteNote(id))}
                editNote={editNote}
                addNote={(note) => dispatch(addNote(note))}
              />

            </Route>
            <Route path='/about'>
              <h1>About Page</h1>
            </Route>
            <Route path='/'>
              <MainPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
