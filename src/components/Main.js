import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

const Repair = styled.h1`
  font-weight: 700;
  line-height: 50px
  font-size: 40px
  color: #fff
  span {
    
    display:block
    font-size: 24px
    line-height: 30px;
  }
`

const Descr = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px
`

const Btn = styled.button`
  background-color: #ffa14b;
  border-radius: 32px;
  padding: 10px 20px
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px
  border: none
`

class Main extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={6}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <Descr>
            Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!
          </Descr>
          <Btn>
            Отправить заявку!
          </Btn>
        </Col>
        <Col lg={6}>

        </Col>
      </Row>
    )
  }
}

export default Main