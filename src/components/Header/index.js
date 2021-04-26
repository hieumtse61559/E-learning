import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Dropdown, DropdownMenu, InputGroup, Button } from 'reactstrap'
import { Dropdown, Button } from 'react-bootstrap'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <header className="d-flex align-items-center justify-content-around">
      <img className="logo" src="./img/e-learning.jpg" />

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Dropdown className="nav_courses">
        <Dropdown.Toggle className="dropdown__courses" >
          Courses
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/courses/FullStack">Full Stack </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/courses/FrontEnd">FrontEnd </Link>

          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/courses/BackEnd">BackEnd</Link>

          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>

      <Link to="/contact">Contact</Link>


      {/* <Link to="/course/bootcamp">Chi tiết khóa học</Link> */}

      <div className="p-3">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </div>


      <div>
        <Button color="primary" className="mr-2">Login</Button>
        <Button color="secondary">SignUp</Button>


      </div>






    </header>
  )
}
