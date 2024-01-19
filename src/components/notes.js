import React, { useContext } from 'react'
import { MdOutlineDeleteForever, } from 'react-icons/md'
import { GrUpdate, GrDocumentUpdate } from 'react-icons/gr'
import styled from 'styled-components'
import Notecontext from '../context/Notes/Context'



export default function Notes(props) {
  const { notes, updatemynote } = props
  const a = useContext(Notecontext)
  return (
    
      <div class="card text-center mx-2 d-flex flex-col  justify-content-between   border border-info my-2  border-2   " style={{ width: '22.5rem' }}>
        <div class="card-header fw-bolder fs-4 ">
          {notes.title}
        </div>
        <div class="card-body">

          <p class="card-text ">{notes.description
          }</p>
          <div className="container d-flex justify-content-between  align-items-end ">
            <button class="btn btn-primary" onClick={() => { a.deleteNotes(notes._id) }} ><MdOutlineDeleteForever /></button>
            <button class="btn btn-primary" onClick={() => { updatemynote(notes) }} ><GrDocumentUpdate className='text-light' /></button>
          </div>
        </div>
        <div class="card-footer text-body-secondary order-3">
        {notes.date.slice(0, 10)}
      </div>
      </div>
     
      
    
  )
}

