import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Find A Recipe
        </h1>
        <h2 className="subtitle">
          Get Information
        </h2>
        <header>
          <nav>
            <ul>
              <li><Link to='/search'>Search</Link></li>
              <li><Link to='/comments'>Comments</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  </section>
)

export default NavBar
