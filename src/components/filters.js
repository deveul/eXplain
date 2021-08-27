import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, MenuItem, Select, InputAdornment, TextField, Typography, Divider, IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { AiOutlineCheckSquare, AiOutlineExpandAlt } from 'react-icons/ai'

import Territories from './territories';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        margin: theme.spacing(1)
    },
    fullHeight: {
        height: '100%'
    },
    headerColumn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        height: '-webkit-fill-available'
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fullWidth: {
        width: '100%',
    },
    fullWidthSelect: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 12
    },
    marginBlock: {
        marginBlock: theme.spacing(1),
    },
    select: {
        // color: '#fff'
        border: '0px'
    },
    selectIcon: {
        color: '#96A8B8'
    },
    searchTextfield: {
        width: '100%',
        margin: theme.spacing(1)
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: theme.spacing(1)
    },
    whiteBox: {
        backgroundColor: '#fff',
        borderRadius: '10px'
    },
    subtitle1: {
        textDecoration: 'underline;bold',
        color: "#96A8B8"
    },
    paddingPerimeter: {
        padding: theme.spacing(1),
        paddingBottom: 0
    },
    paddingTop: {
        paddingTop: "12px"
    },
    button: {
        borderRadius: "25px"
    },
    orange: {
        backgroundColor: "#FC4C02",
        color: "#fff"
    },
    subtitle: {
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'underline',
        color: "#96A8B8",
        fontSize: "small",
        marginBottom: theme.spacing(1)
    },
    subtitle2: {
        alignItems: 'center',
        display: 'flex',
        color: "#96A8B8",
        flex: 1
    },
    input: {
        padding: theme.spacing(1),
        '&::placeholder': {
            // textOverflow: 'ellipsis !important',
            color: '#96A8B8'
        }
    },
    filter: {
        color: '#96A8B8',
        fontWeight: 700,
        fontSize: 'larger',
        marginBlock: theme.spacing(1)
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    nestedDeep: {
        paddingLeft: theme.spacing(12),
    },
    bold: {
        fontWeight: 'bold'
    },
    justifyRight: {
        justifyContent: 'flex-end'
    }
}))

const Filters = () => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const history = useHistory();

    const keyPress = e => {
        if (e.keyCode == 13) {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        var num = search.replace(/[^0-9]/g,'');
        history.push(`/search/FRDEPA${num}/impacter`);
    }

    return (
        <div className={clsx(classes.root, classes.headerColumn)}>
            <div className={classes.headerRow}>
                <p className={classes.filter}>
                    FILTRE
                </p>
                <p className={clsx(classes.subtitle2, classes.justifyRight)}>
                    <ReplayIcon /> Réinitialiser
                </p>
            </div>
            <div className={classes.headerRow}>
                <FormControl variant="outlined" className={classes.fullWidth}>
                    <Select
                        value={'Fonction'}
                        className={clsx(classes.fullWidthSelect, classes.marginBlock)}
                        classes={{
                            root: classes.select,
                            selectMenu: classes.bold,
                            icon: classes.selectIcon,
                        }}
                        IconComponent={ExpandMore}
                    >
                        <MenuItem value="Fonction">
                            Fonctions
                        </MenuItem>
                        <MenuItem value={10}>Maire</MenuItem>
                        <MenuItem value={20}>Député</MenuItem>
                        <MenuItem value={30}>Président</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={clsx(classes.headerColumn, classes.whiteBox)}>
                <div className={classes.headerRow}>
                    <FormControl className={classes.fullWidth}>
                        <Select
                            value={'Fonction'}
                            className={clsx(classes.fullWidthSelect, classes.paddingPerimeter)}
                            disableUnderline
                            classes={{
                                root: classes.select,
                                selectMenu: classes.bold,
                                icon: classes.selectIcon,
                            }}
                            IconComponent={ExpandMore}
                        >
                            <MenuItem value="Fonction">
                                Périmètre géographique
                            </MenuItem>
                            <MenuItem value={10}>Maire</MenuItem>
                            <MenuItem value={20}>Député</MenuItem>
                            <MenuItem value={30}>Président</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.headerRow}>
                    <Typography className={classes.subtitle} variant="subtitle1"><EditOutlinedIcon />Modifier le périmètre</Typography>
                </div>
                <Divider />
                <div className={classes.headerRow}>
                    <TextField
                        id="input-search"
                        variant="outlined"
                        placeholder="Rechercher une localité"
                        className={classes.searchTextfield}
                        onKeyDown={keyPress}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        InputProps={{
                            classes: { input: classes.input },
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton style={{padding: 0}} value={search} onClick={handleSubmit}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </div>
                <Divider />
                <div className={classes.row}>
                    <Typography className={classes.subtitle2} variant="subtitle1"><AiOutlineCheckSquare />{'\u00A0'}Tout décocher</Typography>
                    <Typography className={classes.subtitle2} variant="subtitle1"><AiOutlineExpandAlt />{'\u00A0'}Tout réduire</Typography>
                </div>
                <Divider />
                <Territories />
            </div>
        </div>
    )
}

export default Filters;