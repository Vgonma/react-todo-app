/* eslint-disable */
import React from "react"
import { useLocation, useRouteMatch, Route } from "react-router-dom"
import { Link } from "react-router-dom"

const About = () => {
  const { pathname } = useLocation()
  return (
    <div className="about__content">
    <ul className="about__list">
      <li>
        <Link to='/'>Home</Link>
      </li>
    </ul>
  </div>
  )
}
export default About
