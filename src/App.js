import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './components/navbar'
import { Sidebar } from './components/sidebar'
import { MainPage } from './pages/MainPage'
import { NotesPage } from './pages/NotesPage'
import { NotePage } from './pages/NotePage'
import { inc, dec } from './actions'
import './App.css'

export default function App() {
  const [notes, setNotes] = useState([])

  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter)
  
  console.log('state', state)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setNotes(data))
  }, [])

  const deleteNote = (id) => {
    const notes = notes.filter((item) => item.id !== id)
    setNotes(notes)
  }

  const decrement = () => dispatch(dec())

  const increment = () => dispatch(inc())

  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Header />
        <div className='content'>
          <div className='container'>
            <button onClick={decrement}>-</button>
            <span>{state.counter}</span>
            <button onClick={increment}>+</button>
          </div>
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
