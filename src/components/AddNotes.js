import React, { useContext, useState } from 'react'
import Notecontext from '../context/Notes/Context'
import styled from 'styled-components'


export default function AddNotes() {
  const [note, setNote] = useState({ title:' ', description:' ' })
  const a = useContext(Notecontext)

const onsubmit=(e)=>{
  e.preventDefault();
  a.addNotes(note.title,note.description)
  setNote({title:' ', description:' ' })

}
  const onchangevalue = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })

  }
  return (
    <Container className="container mx-auto w-75 mt-3">
      <h2 className='fs-2 fw-bolder'>Add my Notes</h2>
      <div class="mb-3 my-2 fs-4">
        <label htmlFor="title" class="form-label ">Enter Title</label>
        <input type="text" class="form-control" id="title" name="title" value={note.title} placeholder="Title of Notes" onChange={onchangevalue} />
      </div>
      <div class="mb-3 my-2 fs-4">
        <label htmlFor="description" class="form-label" >Example textarea</label>
        <textarea class="form-control" id="description" name="description" rows="3" value={note.description} onChange={onchangevalue} ></textarea>
      </div>
      <div className="container d-flex justify-content-center">
        <button  disabled={note.title.length<6 && note.title.length<6} type="button" class="btn btn-dark fw-bolder py-2 px-3" onClick={onsubmit}>Submit</button>
      </div>
    </Container>

  )
}
const Container = styled.div``
