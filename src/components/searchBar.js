import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { BsPeople } from 'react-icons/bs';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fullWidth: {
        display: 'flex',
        flexDirection: 'Column',
        // flex: 1,
    },
    searchBar: {
        backgroundColor: '#fff',
        borderRadius: 5
    },
    orangeButton: {
        backgroundColor: "#FC4C02",
        color: "#fff",
        paddingInline: theme.spacing(2.5),
    },
    icon: {
        paddingInline: theme.spacing(1),
        color: '#96A8B8',
    },
    input: {
        padding: theme.spacing(1),
        '&::placeholder': {
            // textOverflow: 'ellipsis !important',
            color: '#96A8B8'
        }
    },
}));

const SearchBar = () => {
    const classes = useStyles();

    const SearchButton = () => (
        <Button className={classes.orangeButton}>
            <SearchIcon />
            {'\u00A0'}
            RECHERCHER
        </Button>
    )

    return (
        <div className={classes.fullWidth}>
            <TextField
                className={classes.searchBar}
                id="standard-name"
                placeholder="Rechercher par nom, prénom"
                InputProps={{
                    classes: { input: classes.input },
                    endAdornment: <SearchButton />,
                    startAdornment: <BsPeople className={classes.icon} />,
                    disableUnderline: true,
                }}
            />
        </div>
    )
}

export default SearchBar;