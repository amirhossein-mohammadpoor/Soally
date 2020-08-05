import React from "react"
import "./Header.scss"
import Indicator from "../../components/indicator"

const Header = props => {
  return (
    <header>
      {
        props.slidePos - 1 >= 0 ? 
          <Indicator questions={props.questions} slidePos={props.slidePos} />
          :
          null
      }
      
    </header>
  )
}

export default Header
