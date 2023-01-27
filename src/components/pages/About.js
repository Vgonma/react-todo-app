/* eslint-disable */
import React from "react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="about__content">
      <h1
      style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign: "center",
      }}
    >
      About
    </h1>
      <p>This site is made following a react tutorial from <a href="https://ibaslogic.com/react-tutorial-for-beginners/" target="_blank">here</a>. The point of this site is to learn how react works and how to update states to trigger renders. By making a todo list we can test React's faculty of passing properties from parent components down to their children. As an extra we can also see how the routers work to trigger renders and update the url depending on what view we want.</p>
  </div>
  )
}
export default About
