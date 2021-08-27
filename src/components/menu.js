import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MyListItem from './listItem';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		backgroundColor: '#FC4C02',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		borderRight: 0
	},
	drawerClose: {
		// backgroundColor: '#FC4C02',
		backgroundColor: '#FFFFFF',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(5) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(7) + 1,
		},
	},
	drawerPaper: {
		width: 250,
		overflow: "auto",
		height: "100%",
		[theme.breakpoints.up("md")]: {
			overflow: "auto",
			width: drawerWidth,
			position: "relative",
			height: "100%"
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// minHeight: '48px !important',
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	goodwillLogo: {
		color: '#fff',
		fontSize: '24px',
		marginTop: '32px',
		marginInline: 'auto'
	},
	whiteElement: {
		color: "#fff",
	},
	iconButtonBorder: {
		border: "solid 2px",
		padding: 0,
		color: "#fff",
		left: '70%',
		backgroundColor: '#FC4C02'
	},
	smallIcon: {
		width: 30,
		height: 30,
	},
	customBorder: {
		borderRadius: "0% 100% 0% 0% / 10% 5% 10% 10%",
		borderRight: 0
	},
	customColor: {
		backgroundColor: '#FC4C02',
	},
	divIconsMenu: {
		display: 'flex',
		flexDirection: 'column',
		height: 'inherit',
		justifyContent: 'space-between',
		padding: 0
	},
	fixedDiv: {
		overflow: 'visible',
		position: 'fixed'
	}
}));

const iconList = [
	{
		value: "home",
		label: "Accueil"
	},
	{
		value: "search",
		label: "Rechercher"
	},
	{
		value: "visibility",
		label: "Spectateur"
	},
];

export default function Menu() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState('search')

	const switchDrawer = () => {
		setOpen(!open);
	};

	return (
		// <CssBaseline />
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx(classes.customColor, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
					[classes.customBorder]: !open,
				}),
			}}
		>
			<Typography className={classes.goodwillLogo} variant="h6">GW</Typography>
			<div className={classes.toolbar} style={{minHeight: 48}}>
				<div className={classes.fixedDiv}>
					<IconButton
						className={classes.iconButtonBorder}
						onClick={switchDrawer}>
						{open ? <ChevronLeftIcon className={classes.whiteElement} /> : <ChevronRightIcon className={classes.whiteElement} />}
					</IconButton>
				</div>
			</div>
			<div className={classes.divIconsMenu}>
				<div>
					<List style={{padding:0}}>
						{iconList.map((item, index) => {
							return <MyListItem
								key={index}
								value={item.value}
								label={item.label}
								selectedIcon={selectedIcon}
								setSelectedIcon={setSelectedIcon}
							/>
						})}
					</List>
				</div>
				<div>
					<div style={{ backgroundColor: '#FFFFFF' }}>
						<div style={{ backgroundColor: '#FC4C02', borderRadius: '0% 100% 100% 0% / 10% 0% 50% 10%' }}>
							<MyListItem
								value="account"
								label="Mon compte"
								selectedIcon={selectedIcon}
								setSelectedIcon={setSelectedIcon}
							/>
						</div>
					</div>
					<div style={{ backgroundColor: '#EDF3F7' }}>
						<div style={{ backgroundColor: '#FFFFFF', borderRadius: '0% 100% 100% 0% / 10% 0% 50% 10%' }}>
							<MyListItem
								value="information"
								label="Informations"
								selectedIcon={selectedIcon}
								setSelectedIcon={setSelectedIcon}
							/>
						</div>
					</div>
				</div>
			</div>
		</Drawer>
	);
}