import React, { Component } from 'react';
import Me from './me.svg';
import MeTwo from './metwo.svg';
import Land from './land.svg';
import Desk from './desk.svg';
import Header from './components/header';
import Img from './components/img';
import Title from './components/title';
import SubTitle from './components/subTitle';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Grid>
						<Img src={MeTwo} sizeX="102px" />
						<Row center="xs">
							<Col xs={12}>
								<Title>I'm Francisco</Title>
							</Col>
							<SubTitle>Senior Frontend Developer/Designer</SubTitle>
						</Row>
						<Row bottom="xs" center="xs">
							<Col xs={12}>
								<Img src={Desk} sizeX="100%" sizeY="120%" max="600px" />
							</Col>
						</Row>
					</Grid>
				</Header>
				<Grid>
					<Row center="xs">
						<Img src={Me} sizeX="152px" sizeY="200px" />
						<Col xs={12}>
							<SubTitle>Hi.</SubTitle>
						</Col>
					</Row>
				</Grid>
			</React.Fragment>
		);
	}
}

export default App;
