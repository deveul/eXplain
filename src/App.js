import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Menu from './components/menu';
import Header from './components/header';
import Filters from './components/filters';

import './App.css';
import { createTheme, Divider } from '@material-ui/core';
import Impacters from './components/impacters';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: '100%',
		width: '100%',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: '100%'
	},
	mainContent: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#EDF3F7',
		height: '100%',
		width: '100%'
	},
}));

const theme = createTheme();


function App() {
	const classes = useStyles();
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		fetch('/time').then(res => res.json()).then(data => {
			setCurrentTime(data.time);
		});
	}, []);

	return (
		<div className="App">
			<div className={classes.root}>
				<Menu />
				<div className={classes.content}>
					<Header />
					<div className={classes.mainContent}>
						<Filters />
						<Divider orientation="vertical" flexItem />
						<Impacters />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;