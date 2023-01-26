/* eslint-disable */
import React from "react"
import { useLocation, useRouteMatch } from "react-router-dom"

const About = () => {
  const { pathname } = useLocation()
  return (
    <div className="about__content">
    <ul className="about__list">
      <li>
        <Link to={`${pathname}/about-app`}>About App</Link>
      </li>
      <li>
        <Link to={`${pathname}/about-author`}>About Author</Link>
      </li>
    </ul>
    <Route path={`${path}/:slug`}>
      <SinglePage />
    </Route>
  </div>
  )
}
export default About
