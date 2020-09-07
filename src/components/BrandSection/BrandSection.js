import React from "react"
import "./BrandSection.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from "reactstrap"

const BrandSection = props => {
  return (
    <>
      {
        (props.slidePos === 0 || props.slidePos === props.slideNumber + 1) ?
          <div>
            {
              (props.slidePos === props.slideNumber + 1) ?
                <div className="d-flex d-sm-none justify-content-center">
                  <img src={"/images/logo.png"} alt="logo" className="logo" />
                </div>
                :
                null
            }
            <div className="soally">
              <span>قدرت گرفته از <span className="title">Soally</span></span>
              <span className="crm-platform">پلتفرم طراحی فرم‌های  CRM آنلاین</span>
            </div>
          </div>
          :
          <Row className="px-3">
            <Col xs="12" sm="6" className="d-flex justify-content-center justify-content-sm-start p-0">
              <img src={"/images/logo.png"} alt="logo" className="logo" />
            </Col>
            <Col xs="12" sm="6" className="p-0">
              <div className="d-flex justify-content-center justify-content-sm-end">
                <div className="soally">
                  <span>قدرت گرفته از <span className="title">Soally</span></span>
                  <span className="crm-platform">پلتفرم طراحی فرم‌های  CRM آنلاین</span>
                </div>
              </div>
            </Col>
          </Row>
      }
    </>
  )
}

export default BrandSection