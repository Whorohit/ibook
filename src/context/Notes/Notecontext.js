import React, { useState } from 'react'
import NoteContext from './Context'
import { json } from 'body-parser'
import { useNavigate } from 'react-router-dom'

const NoteState = (props) => {
 
  const url = "http://localhost:5000"
  const [myNotes, setMyNotes] = useState([ ])
  const [alertmessage, setAlertmessage] = useState({ delete: { msg: "Note Delete  Successfully" }, edit: { msg: "Note Edit Successfully" }, add: { msg: "Note  Added  Successfully" }, login: { msg: "Login Succeccsfully" }, Signup: { msg: "Account Createed Successfully" } })
  const [alert, setAlert] = useState(null)
  const handlechangealert = (type, msg) => {
    setAlert({ types: type, msg: msg })
  }

  const getNotes = async () => {
    {
      const response = await fetch(`http://localhost:5000/api/allnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": " application/json",
          // "id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMjk3M2Q3MTBmZDc0YjU0MjA5MjVkIn0sImlhdCI6MTY5MTUyMjg3N30.5pBx7pQT_kFT8pPKtXzin8v_hB7ysbxMf0cvxoG1Eu0",
          "id": localStorage.getItem('id')

        },
      });
      const jsonfile = await response.json()
      setMyNotes(jsonfile)
    }

  }



  const addnotes = async (title, description) => {
    {
      const response = await fetch(`http://localhost:5000/api/savenote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "id": localStorage.getItem('id')
          

        },

        body: JSON.stringify({ title, description }), // body data type must match "Content-Type" header
      });
      const json = await response.json();
      setMyNotes(myNotes.concat(json))
      handlechangealert('success', alertmessage.add.msg)
      setTimeout(() => {
        setAlert(null)
      }, 3000);
      // parses JSON response into native JavaScript objects
    }
    const note = {
      "_id": "64bbf189b320953c4153c4b9",
      "user": "64bbf08fb320953c4153c4af",
      "title": title,
      "description": description,
      "date": "2023-07-22T15:11:05.657Z",
      "__v": 0
    }

  }
  const deleteNotes = async (id) => {
    {
      const response = await fetch(`${url}/api/deletenote/${id}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "id": localStorage.getItem('id')

        },

      });
      const json = response.json();
      console.log(json) // parses JSON response into native JavaScript objects
    }
    const New = myNotes.filter((note) => {
      return note._id !== id

    })
    setMyNotes(New)
    handlechangealert('success', alertmessage.delete.msg)
      setTimeout(() => {
        setAlert(null)
      }, 3000);
    

  }
  const editNotes = async (id, title, description) => {
    {
      //code for serve side 
      const response = await fetch(`http://localhost:5000/api/updatenote/${id}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "id": localStorage.getItem('id')

        },

        body: JSON.stringify({ title, description }), // body data type must match "Content-Type" header
      });
      const json = response.json(); // parses JSON response into native JavaScript objects
    }
    // code for user side
    const Newnotes = JSON.parse(JSON.stringify(myNotes))
    for (let index = 0; index < Newnotes.length; index++) {
      const element = myNotes[index]
      if (element._id === id) {
        Newnotes.title = title
        Newnotes.description = description
        break
      }


    }
    setMyNotes(Newnotes)
    handlechangealert('success', alertmessage.edit.msg)
      setTimeout(() => {
        setAlert(null)
      }, 3000);
    


  }
  // fetch for auth login 
  const login = async (email, password) => {
    const response = await fetch(`http://localhost:5000/api/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",


      },
      body: JSON.stringify({ password: password, email: email }),// body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json)
    // if (json.success) {
    //   await handlechangealert('success', alertmessage.login.msg)
    //   setTimeout(() => {
    //     setAlert(null)
    //   }, 3000);
      
    // }
    // else{
    //   await handlechangealert('danger', json.msg)
    //   setTimeout(() => {
    //     setAlert(null)
    //   }, 3000);
    // }

    return json
    

  }
  const create = async (name, email, password) => {
    const response = await fetch(`http://localhost:5000/api/auth`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",


      },
      body: JSON.stringify({ name: name, email: email, password: password }),// body data type must match "Content-Type" header
    });
    const json = await response.json();
 console.log(json)
    return json
  }
  
  return (
    <NoteContext.Provider value={{ myNotes: myNotes, setMyNotes: setMyNotes, addNotes: addnotes, deleteNotes: deleteNotes, getNotes: getNotes, editNotes: editNotes, login: login, create: create, alert: alert,setAlert:setAlert,handlechangealert:handlechangealert }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;