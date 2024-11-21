import React from 'react'
import { Link } from "react-router-dom";

function MenuLink(props) {
  return (
    <div>
        <Link to={props.url}>{props.name}</Link>
    </div>
  )
}

export default MenuLink
