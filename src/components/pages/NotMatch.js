/* eslint-disable */
import React from "react"
import { Link } from "react-router-dom";

const NotMatch = () => {
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
      Page not found
    </h1>
    <Link to="/"
      style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#0000ff",
        textTransform: "lowercase",
        textAlign: "center",
        textDecoration: "underline",
      }}
    >
      Take me home
    </Link>
    </div>
  )
}
export default NotMatch
