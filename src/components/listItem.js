import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { HomeOutlined, PersonOutlineOutlined, SearchOutlined, VisibilityOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    mediumIcon: {
        fontSize: '32px'
    },
    selectedIcon: {
        color: '#fff',
    },
    notSelectedIcon: {
        color: '#FD8E4A'
    },
    goodwillLogo: {
        color: '#fff',
        fontSize: '32px'
    },
    whiteText: {
        color: "fff"
    }
}));

const MyListItem = props => {
    const classes = useStyles();
    const iconClass = clsx(classes.mediumIcon, { [classes.selectedIcon]: props.selectedIcon === props.value, [classes.notSelectedIcon]: props.selectedIcon !== props.value });
    const icon = props.value === "home" ? <HomeOutlined className={iconClass} />
        : props.value === "search" ? <SearchOutlined className={iconClass} />
            : props.value === "visibility" ? <VisibilityOutlined className={iconClass} />
                : props.value === "account" ? <PersonOutlineOutlined className={iconClass} />
                : null;

    return (
        <ListItem button onClick={() => props.setSelectedIcon(props.value)}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{props.label}</Typography>} />
        </ListItem>
    );
}

export default MyListItem;