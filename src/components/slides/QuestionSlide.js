import React from "react"
import "./QuestionSlide.scss"
import OptionButton from "./OptionButton"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from "reactstrap"

const QuestionSlide = props => {
  return (
    <div className="question-slide">
      <h3>{props.text}</h3>
      <Row className="option-buttons d-none d-sm-flex justify-content-sm-center">
        {
          props.options.map(option => {
            return <OptionButton
              key={option.key}
              buttonKey={option.key}
              text={option.text}
              setOutput={props.setOutput}
              questionId={props.questionId}
            />
          })
        }
      </Row>
      <Row className="option-buttons d-flex d-sm-none justify-content-center">
        <div className="d-flex flex-column align-items-start">
          {
            props.options.map(option => {
              return <OptionButton
                key={option.key}
                buttonKey={option.key}
                text={option.text}
                setOutput={props.setOutput}
                questionId={props.questionId}
              />
            })
          }
        </div>
      </Row>
    </div>
  )
}

export default QuestionSlide