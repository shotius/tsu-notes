import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header} from './components/navbar'
import {Sidebar} from './components/sidebar'
import {MainPage} from './pages/MainPage'
import {NotesPage} from './pages/NotesPage'
import {NotePage} from './pages/NotePage'
import './App.css'
import axios from 'axios'
import EditPage from "./pages/EditPage";
import { getNotes, deleteNote } from './redux/actions/notesAction'
import { useSelector, useDispatch } from 'react-redux'
import notesReducer from './redux/reducers/notesReducer'

export default function App() {
  const [notes, setNotes] = useState([])

  const dispatch = useDispatch()
  const notesRed = useSelector((state) => state.notesReducer.notes)

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  // after deleletion fetch notes again
  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id))
  }

  const editNote = (id) => {
    console.log('edit is clicked')
  }

  const addNote = (note) => {
    axios
      .post('http://localhost:3001/notes', note)
      .then(({data}) => setNotes(notes.concat(data)))
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <Router>
        <Sidebar/>
        <Header/>
        <div className='content'>
          <Switch>
            <Route path="/note/:id/edit" render={({match: {params}}) => <EditPage notes={notes} setNotes={setNotes}/>
            }/>
            <Route
              path='/note/:id'
              render={(props) => <NotePage id={props.match.params.id}/>}
            />
            <Route path='/notes'>
              <NotesPage
                notes={notesRed}
                removeNote={handleDeleteNote}
                editNote={editNote}
                addNote={addNote}
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
