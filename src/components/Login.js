import React, { useContext, useEffect, useState } from 'react'
import Notecontext from '../context/Notes/Context'
import { useNavigate ,Link} from 'react-router-dom'
import Alert from './alert'

export default function Login() {
  const [logindata, setLogindata] = useState({ email: " ", password: " " })
  const a = useContext(Notecontext)
  const history = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // a.login(logindata.password,logindata.email)
    let jsonlogin = await a.login(logindata.email, logindata.password)
    if (jsonlogin.success) {
      localStorage.setItem("id", jsonlogin.id)
      a.handlechangealert('success', "Login Succeccsfully")
      await history('/')
      setTimeout(() => {
        a.setAlert(null)
      }, 3000)

    }
    else {
      await a.handlechangealert('danger', jsonlogin.msg)
      setTimeout(() => {
        a.setAlert(null)
      }, 3000)
    }


  }
  const onchangevalue = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value })

  }
  return (
    <>
     <Alert/>
      <section class="gradient-form" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">

                      <div class="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }} alt="logo" />
                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input type="email" id="email" class="form-control" name='email'
                            placeholder="Email address" onChange={onchangevalue} />
                          <label class="form-label" for="email">Username</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="password" id="password" class="form-control" name='password' onChange={onchangevalue} />
                          <label class="form-label" for="password">Password</label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1 d-flex flex-column">
                          <button type="submit" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"  >Log
                            in</button>
                         
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn btn-outline-primary"><Link className='text-decoration-none' to={'/signup'}>Create new</Link></button>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div class="col-lg-6  d-none d-md-flex  align-items-center gradient-custom-2 text-dark " style={{
                    background: "rgb(87,98,186)",
                    background: "linear-gradient(6deg, rgba(87,98,186,1) 0%, rgba(88,113,190,1) 0%, rgba(90,167,206,1) 60%)"
                  }}>
                    <div class=" px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4 fs-2 fw-bolder">We are more than just a company</h4>
                      <p class="small fs-3 mb-0">At Cloud Book, our mission is to revolutionize
                        the way you read, store, and access your Notes. We believe
                        in creating a seamless and immersive  read, store, and access  experience that goes
                        beyond the limitations of traditional paperbacks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}
