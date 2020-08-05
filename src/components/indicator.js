import React from "react"
import "./indicator.scss"

const Header = props => {
  let lineWidth
  let dotBgColor
  let dotShadow

  if (props.slidePos >= 1 && props.slidePos <= props.questions.length) {
    lineWidth = (props.slidePos - 1) * 36.85
  }

  const linearGradientColor = (startColor, endColor, index, slidePos) => {
    const color1 = {
      red: parseInt(startColor.slice(1, 3), 16),
      green: parseInt(startColor.slice(3, 5), 16),
      blue: parseInt(startColor.slice(5, 7), 16)
    }
    const color2 = {
      red: parseInt(endColor.slice(1, 3), 16),
      green: parseInt(endColor.slice(3, 5), 16),
      blue: parseInt(endColor.slice(5, 7), 16)
    }

    const red = Math.round(color1.red + ((index + 1) / slidePos) * (color2.red - color1.red))
    const green = Math.round(color1.green + ((index + 1) / slidePos) * (color2.green - color1.green))
    const blue = Math.round(color1.blue + ((index + 1) / slidePos) * (color2.blue - color1.blue))

    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <div className="dots">
      <div className="line" style={{ width: `${lineWidth}px` }}></div>
      {
        props.questions.map((question, index) => {
          dotBgColor = index < props.slidePos ?
            linearGradientColor("#f08a5d", "#b83b5e", index, props.slidePos)
            :
            "#e3e3e3"
          
          if (index + 1 === props.slidePos) {
            dotShadow = `0px 0px 0px 3px rgb${dotBgColor.match(/\((.*?)\)/g)[0].slice(0, -1)}, 0.56)`
          } else {
            dotShadow = null
          }

          return <div
            key={index}
            className="dot"
            style={{ backgroundColor: dotBgColor, boxShadow: dotShadow }}>
          </div>
        })
      }
    </div>
  )
}

export default Header