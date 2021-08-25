import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './searchBar';
import Results from './results';
import StepperSearch from './stepperSearch';

const useStyles = makeStyles((theme) => ({
    rightPart: {
        display: 'flex',
        flexDirection: 'column',
        flex: 6,
        margin: theme.spacing(1),
    }
}));

const Impacters = () => {
    const classes = useStyles();
    return (
        <div className={classes.rightPart}>
            <SearchBar />
            <Results />
            <StepperSearch />
        </div>
    )
}

export default Impacters;