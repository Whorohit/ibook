import React, { useContext,useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Notecontext from '../context/Notes/Context'
import Alert from './alert'

export default function Signup() {
  const [createaccount, setCreateaacount] = useState({name:" ",email:" ",password:" ",cpassword:" "})
  const a = useContext(Notecontext)
  const{create,handlechangealert,setAlert}=a
  const history = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const{name,email,password,cpassword}=createaccount
    let json= await create(name,email,password)
    if (json.success) {
      localStorage.setItem("token", json.id)
      history('/')
      await handlechangealert('success', "Account Created Succeccsfully")
      setTimeout(() => {
        setAlert(null)
      }, 3000)

    }
    else
    {
        await handlechangealert('danger',json.errors.msg)
        setTimeout(() => {
          setAlert(null)
        }, 3000)
        // alert(json.errors)
  
    }

  }

  const onchangevalue = (e) => {
    setCreateaacount({ ...createaccount, [e.target.name]: e.target.value })

  }



  return (
   <>
    <Alert/>
    <section className="mh-100 py-2   " style={{backgroundColor: "#eee"}}>
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{borderRadius: "25px"}}>
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="name" class="form-control" onChange={onchangevalue} name='name' />
                                            <label class="form-label" for="name">Your Name</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="email" id="email" class="form-control" onChange={onchangevalue} name='email' />
                                            <label class="form-label" for="email" >Your Email</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="password" id="password" class="form-control"onChange={onchangevalue}  name='password' />
                                            <label class="form-label" for="password">Password</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="password" id="cpassword" class="form-control"  onChange={onchangevalue}  name='cpassword' />
                                            <label class="form-label" for="cpassword">Repeat your password</label>
                                        </div>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <Link to={'/login'}>Already Have Account?</Link>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" class="btn btn-primary btn-lg">Register</button>
                                    </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7  d-none d-md-flex align-items-center order-1 order-lg-2">

                                <img src="https://i.pinimg.com/564x/3a/f6/78/3af67839a8282202ae246de6749eb493.jpg"
                                    class="img-fluid" alt="Sample image"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   </>
  )
}
