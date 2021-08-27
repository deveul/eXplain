import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Collapse, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import OrangeCheckbox from './orangeCheckbox';
import Municipality from './municipality';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: theme.spacing(1)
    },
    headerColumn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
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

const Epci = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(props.parentChecked);
    const [territory, setTerritory] = useState(null)
    const epci = props.epci;

    useEffect(() => {
        setChecked(props.parentChecked);
    }, [props.parentChecked])

    const handleClick = () => {
        if (!open) {
            fetch('/territory').then(res => res.json()).then(data => {
                console.log("data:", data)
                if (data.territory) {
                    setTerritory(data.territory);
                }
            });
        }
        setOpen(!open);
    };

    if (!epci) return null;
    return (
        <List dense={true} component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <IconButton size='small' onClick={handleClick}>
                    {open ? <ExpandMore /> : <ExpandMore style={{transform: 'rotate(-90deg)'}} />}
                </IconButton>
                <OrangeCheckbox name={`${epci}CheckBox`} checked={checked} onChange={() => setChecked(!checked)}/>
                <ListItemText primary={epci} />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {territory && territory.children && territory.children.map((child, index) => {
                    return <Municipality key={index} municipality={child} parentChecked={checked} />
                })}
            </Collapse>
        </List>
    )
}

export default Epci;