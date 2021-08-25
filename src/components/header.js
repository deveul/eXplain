import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { FiFile } from 'react-icons/fi';
import { RiNewspaperLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';

const useStyles = makeStyles((theme) => ({
    headerColumn: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1)
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    subtitle1: {
        textDecoration: 'underline;bold',
        color: "#96A8B8"
    },
    paddingTop: {
        paddingTop: "12px"
    },
    button: {
        borderRadius: "25px",
        backgroundColor: '#F6F9FB',
        borderColor: '#E6ECF3',
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#96A8B8'
    },
    bold: {
        fontWeight: 'bold'
    },
    buttonMargin: {
        margin: theme.spacing(1)
    },
    orange: {
        backgroundColor: "#FC4C02",
        color: "#fff"
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.headerColumn}>
            <div className={classes.headerRow}>
                <IconButton style={{ backgroundColor: "#EDF3F7" }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography className={clsx(classes.subtitle1, classes.paddingTop)} variant="body1" gutterBottom>
                    Recherche
                </Typography>
                <NavigateNextIcon style={{color:"#96A8B8"}} className={classes.paddingTop} />
                <Typography className={clsx(classes.bold, classes.paddingTop)} variant="body1" gutterBottom>
                    Résultats de recherche
                </Typography>
            </div>
            <div className={classes.headerRow}>
                <ButtonGroup className={classes.buttonMargin} color="primary" aria-label="buttonGroup">
                    <Button className={classes.button} classes={{label: classes.buttonText}}><RiNewspaperLine /> Presse (347)</Button>
                    <Button className={classes.button} classes={{label: classes.buttonText}}><FiFile /> Publication des collectivités (256)</Button>
                </ButtonGroup>
                <Button className={clsx(classes.button, classes.orange, classes.buttonMargin)}><BsPeople /> Impacters (357)</Button>
            </div>
        </div>

    );
}

export default Header;