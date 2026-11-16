import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to Student Management System</h1>
      <p>Register a new student and view student details easily.</p>
      <br />
      <Link to="/register">
        <button>Go to Register</button>
      </Link>
    </div>
  )
}

export default Home