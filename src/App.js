import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/navbar'
import { Sidebar } from './components/sidebar'
import { MainPage } from './pages/MainPage'
import { NotesPage } from './pages/NotesPage'
import { NotePage } from './pages/NotePage'
import './App.css'

export default function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data))
  }, [])

  const deleteNote = (id) => {
    // const notes = notes.filter((item) => item.id !== id)
    // setNotes(notes)
    console.log('clicked remove')
  }

  const editNote = (id) => {
    console.log('edit is clicked')
  }

  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Header />
        <div className='content'>
          <Switch>
            <Route
              path='/note/:id'
              render={(props) => <NotePage id={props.match.params.id} />}
            />
            <Route path='/notes'>
              <NotesPage 
                notes={notes} 
                removeNote={deleteNote} 
                editNote={editNote}
              />
            </Route>
            <Route path='/about'>
              <h1>About Page</h1>
            </Route>
            <Route path='/'>
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
