import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fullHeight: {
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    fullWidth: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        backgroundColor: '#fff',
        borderRadius: 5
    },
    activeButton: {
        backgroundColor: '#FC4C02',
        color: "#fff",
        margin: theme.spacing(1)
        // minWidth: '140px'
    },
    inactiveButton: {
        backgroundColor: '#FFF',
        color: "#96A8B8",
        margin: theme.spacing(1)
        // minWidth: '140px'
    },
    spanMargin: {
        margin: theme.spacing(1)
    },
    activePage: {
        color: '#FC4C02',
    },
    inactivePage: {
        color: '#96A8B8',
    },
}));

const StepperSearch = () => {
    const classes = useStyles();

    return (
        <div className={classes.fullHeight}>
            <div className={classes.fullWidth}>
                <Button className={classes.inactiveButton}>
                    <ArrowBackIcon />
                    {'\u00A0'}
                    Précédent
                </Button>
                <Typography variant='body1'>
                    <span className={clsx(classes.spanMargin, classes.activePage)}>1</span>
                    <span className={clsx(classes.spanMargin, classes.inactivePage)}>2</span>
                    <span className={clsx(classes.spanMargin, classes.inactivePage)}>3</span>
                    <span className={clsx(classes.spanMargin, classes.inactivePage)}>...</span>
                    <span className={clsx(classes.spanMargin, classes.inactivePage)}>26</span>
                </Typography>
                <Button className={classes.activeButton}>
                    Suivant
                    {'\u00A0'}
                    <ArrowForwardIcon />
                </Button>
            </div>
        </div>
    )
}

export default StepperSearch;