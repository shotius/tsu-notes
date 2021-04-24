import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './components/navbar'
import { Sidebar } from './components/sidebar'
import { MainPage } from './pages/MainPage'
import { NotesPage } from './pages/NotesPage'
import { NotePage } from './pages/NotePage'
import './App.css'

export default function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setNotes(data))
  }, [])

  const deleteNote = (id) => {
    const notes = notes.filter((item) => item.id !== id)
    setNotes(notes)
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
              <NotesPage notes={notes} removeNote={deleteNote} />
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
