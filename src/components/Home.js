import React, { useContext, useEffect, useRef, useState } from 'react'
import Notecontext from '../context/Notes/Context'
import Notes from '../components/notes'
import AddNotes from '../components/AddNotes'
import Navbar from './Navbar'
import Alert from './alert'
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const a = useContext(Notecontext)
  const {getNotes,editNotes,myNotes,deleteNotes,setMyNotes}=a
  const ref = useRef(null)
  const close=useRef(null)
  const history=useNavigate()
  const [editnote, setEditnote] = useState({id:" ", edittitle: '1', editdescription: '1' })
  const prevMyNotes = useRef(myNotes);
  useEffect(() => {
    if(localStorage.getItem('id'))
    {
      getNotes();
      console.log(myNotes);
    }
    else{
      history('/login')
    }
   
  },[ setMyNotes ])

  const updatemynote = (n) => {
    ref.current.click()
    setEditnote({id:n._id ,edittitle:n.title,editdescription:n.description})
  }
  const onsubmit = (e) => {
    console.log(editnote)
    editNotes(editnote.id,editnote.edittitle,editnote.editdescription)
    e.preventDefault();
    close.current.click()

  }
  const onchangevalue = (e) => {
    setEditnote({ ...editnote, [e.target.name]: e.target.value })

  }
   if(myNotes==='Internal Server Error')
   {
    history('/login')
   }

  return (<>
     <Navbar/>
     <Alert/>
    <AddNotes  />
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3 my-2 fs-4">
              <label htmlFor="edittitle" class="form-label ">Enter Title</label>
              <input type="text" class="form-control" id="edittitle" name="edittitle" placeholder="Title of Notes" Value={editnote.edittitle} onChange={onchangevalue} />
            </div>
            <div class="mb-3 my-2 fs-4">
              <label htmlFor="editdescription" class="form-label" >Enter Description</label>
              <input class="form-control" id="editdescription" name="editdescription" rows="3" Value={editnote.editdescription} onChange={onchangevalue} ></input>
            </div>
            {/* <div className="container d-flex justify-content-center">
              <button type="button" class="btn btn-dark fw-bolder py-2 px-3" onClick={onsubmit}>Submit</button>
            </div> */}
          </div>
          <div class="modal-footer">
            <button type="button" ref={close} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={onsubmit}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-75 mx-auto ">
      <h2 className='mx-auto fw-bolder '>Your Saved Notes</h2>
      <div class="row mx-auto d-flex justify-content-between">
        {myNotes.map((notes) => {
          return <Notes key={notes._id} notes={notes} updatemynote={updatemynote} />
        })}
      </div>
    </div>

  </>


  )
}
