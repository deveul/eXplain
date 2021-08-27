import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import OrangeCheckbox from './orangeCheckbox';

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

const Municipality = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(props.parentChecked);
    const municipality = props.municipality;

    useEffect(() => {
        setChecked(props.parentChecked);
    }, [props.parentChecked])

    if (!municipality) return null;
    return (
        <List dense={true} component="div" disablePadding>
            <ListItem button className={classes.nestedDeep}>
                <OrangeCheckbox name={`${municipality}CheckBox`} checked={checked} onChange={() => setChecked(!checked)} />
                <ListItemText primary={municipality} />
            </ListItem>
        </List>
    )
}

export default Municipality;