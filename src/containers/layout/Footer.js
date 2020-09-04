import React from "react"
import "./Footer.scss"
import BrandSection from "../../components/BrandSection/BrandSection"

const Footer = props => {
  return (
    <footer>
      <BrandSection 
        slidePos={props.slidePos}
        slideNumber={props.slideNumber}
        logoUrl={props.logoUrl}
      />
    </footer>
  )
}

export default Footer