import React, { Component } from 'react'

import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import styled from 'styled-components'

const Repair = styled.div`
	color: #464646;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	display: block
	span {
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const Call = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	display: block
	span {
		color: #464646;
		font-size: 21px;
		font-weight: 700;
		display: block
	}
`

const TelButton = styled.button`
	background-color: #3fc7db
	border-radius: 22px
	padding: 15px 20px
	color: #fff	
	font-size: 14px
	border: none
`

class Address extends React.Component {
	render() {
		return (
			<span> {this.props.addr} </span>
		)
	}
}

class TelNumber extends React.Component {
	render() {
		return (
			<span> {this.props.num} </span>
		)
	}
}


class Menu extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={3}>
					<Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
				</Col>
				<Col lg={3} lgOffset={1}>
					<WorkTime>
						Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Address addr="Ленинская, 301 " />
					</WorkTime>
				</Col>
				<Col lg={3}>
					<Call>
						Пн-пт с 10 до 20, сб,вс с 11 до 18
						<TelNumber num="8 (846) 922 55 44 " />
					</Call>
				</Col>
				<Col lg={2}>
					<TelButton>Заказать звонок!</TelButton>
				</Col>
			</Row>
		)
	}
}

export default Menu