import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { HomeOutlined, PersonOutlineOutlined, SearchOutlined, VisibilityOutlined, InfoOutlined } from '@material-ui/icons';

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
    informationIcon: {
        color: '#96A8B8'
    },
    marginBottom: {
        marginBottom: theme.spacing(2)
    }
}));

const MyListItem = props => {
    const classes = useStyles();
    const iconClass = clsx(classes.mediumIcon, {
        [classes.selectedIcon]: props.selectedIcon === props.value,
        [classes.notSelectedIcon]: props.selectedIcon !== props.value,
        [classes.informationIcon]: props.value === "information"
    });
    const icon = props.value === "home" ? <HomeOutlined className={iconClass} />
        : props.value === "search" ? <SearchOutlined className={iconClass} />
            : props.value === "visibility" ? <VisibilityOutlined className={iconClass} />
                : props.value === "account" ? <PersonOutlineOutlined className={clsx(iconClass, classes.marginBottom)} />
                    : props.value === "information" ? <InfoOutlined className={clsx(iconClass, classes.marginBottom)} />
                : null;

    return (
        <ListItem button onClick={() => props.setSelectedIcon(props.value)}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" className={(props.value === 'account' || props.value === 'information') ? classes.marginBottom : null }style={{ color: props.value === 'information' ? '#96A8B8' : '#FFFFFF' }}>{props.label}</Typography>} />
        </ListItem>
    );
}

export default MyListItem;