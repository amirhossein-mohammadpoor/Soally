import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import StartingSlide from "../../components/slides/StartingSlide"
import QuestionSlide from "../../components/slides/QuestionSlide"
import EndingSlide from "../../components/slides/EndingSlide"

const Main = props => {
  const NextArrow = props => {
    const { onClick } = props
    return (
      <div
        className={"slick-arrow"}
        onClick={onClick}
      >
      </div>
    )
  }

  const PrevArrow = props => {
    const { onClick } = props
    return (
      <div
        className={"slick-arrow"}
        onClick={onClick}
      >
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: current => {
      props.slidePos(current)
    }
  }

  const sliderRef = useRef(null)

  const handleStart = () => {
    sliderRef.current.slickNext()
  }

  const HANDLE_SET_OUTPUT = result => {
    sliderRef.current.slickNext()
    props.setOutput(result)
  }

  return (
    <main>
      <Slider ref={sliderRef} {...settings}>
        <StartingSlide
          start={handleStart}
          logoUrl={props.logoUrl}
        />
        {
          props.questions.map((question, index) => {
            return <QuestionSlide
              key={index}
              text={question.text}
              options={question.options}
              questionId={question.id}
              next={handleStart}
              setOutput={HANDLE_SET_OUTPUT}
            />
          })
        }
        <EndingSlide />
      </Slider>

    </main>
  )
}

export default Main