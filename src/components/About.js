import React from 'react'
import Navbar from './Navbar'


export default function About() {
  return (
    <>
      <Navbar />
      <div className='w-75 mx-auto'>
        <h1 className='fs-1 fw-bolder'>
          Hello there!
        </h1>
        <h1 className='fs-5'>
          I'm thrilled to introduce you to CloudBook, my personal todo app project that marries simplicity with powerful features. As the sole creator of this application, I've poured my passion into crafting a seamless experience for managing your tasks, while placing a strong emphasis on data security and accessibility.
        </h1>
        <div className='my-4'>
          <h1 className='fw-bolder fs-3'>
            Authentication:
          </h1>
          <h1 className='fs-5 '>Your tasks are your own. With a robust authentication process, CloudBook ensures that your todo lists remain private and secure.</h1>
          <h1 className='fw-bolder fs-3'>
          MongoDB Integration:
          </h1>
          <h1 className='fs-5 '> Leveraging the reliability of MongoDB, your todos are stored efficiently, providing a smooth and responsive experience.</h1>
          <h1 className='fw-bolder fs-3'>
           Data Security: 
          </h1>
          <h1 className='fs-5 '>Trust is essential. CloudBook employs top-notch security measures to safeguard your todo lists, prioritizing your privacy.</h1>
          <h1 className='fw-bolder fs-3'>
          User-Friendly Interface: 
          </h1>
          <h1 className='fs-5 '>I've designed CloudBook to be intuitive and user-friendly, ensuring that task management is both enjoyable and efficient.</h1>
          <h1 className='fw-bolder fs-3'>
          Accessibility:
          </h1>
          <h1 className='fs-5 '> Life is on-the-go. CloudBook is accessible across devices, allowing you to manage your todos anytime, anywhere.</h1>
        </div>
        <h1></h1>
      </div>
    </>
  )
}
