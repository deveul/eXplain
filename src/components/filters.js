import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Checkbox, Collapse, FormControl, MenuItem, Select, InputAdornment, List, ListItem, ListItemText, TextField, Typography, Divider, IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { AiOutlineCheckSquare, AiOutlineExpandAlt } from 'react-icons/ai'

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

const OrangeCheckbox = withStyles({
    root: {
        color: '#FEE2D6',
        '&$checked': {
            color: '#FEE2D6',
            "& .MuiIconButton-label": {
                position: "relative",
                zIndex: 0
            },
            "& .MuiIconButton-label:after": {
                content: '""',
                left: 4,
                top: 4,
                height: 15,
                width: 15,
                position: "absolute",
                backgroundColor: '#FC4E07',
                zIndex: -1
            },
        }
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Filters = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [openNested, setOpenNested] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickNested = () => {
        setOpenNested(!openNested);
    };

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
                    {/* <InputLabel id="demo-simple-select-outlined-label">Fonctions</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={'Fonction'}
                        className={clsx(classes.fullWidthSelect, classes.marginBlock)}
                        classes={{
                            root: classes.select,
                            selectMenu: classes.bold,
                            icon: classes.selectIcon,
                        }}
                        IconComponent={ExpandMore}
                        disableUnderline
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
                            id="demo-simple-select-outlined"
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
                        InputProps={{
                            classes: { input: classes.input },
                            endAdornment:
                                <InputAdornment position="end">
                                    <SearchIcon />
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
                <List dense={true}>
                    <ListItem button>
                        <IconButton size='small' onClick={handleClick}>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                        <OrangeCheckbox />
                        <ListItemText primary="Aube" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List dense={true} component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <IconButton size='small' onClick={handleClickNested}>
                                    {openNested ? <ExpandLess /> : <ExpandMore />}
                                </IconButton>
                                <OrangeCheckbox />
                                <ListItemText primary="CA des portes de Romilly-Sur-Seine" />
                            </ListItem>
                        </List>
                        <Collapse in={openNested} timeout="auto" unmountOnExit>
                            <List dense={true} component="div" disablePadding>
                                <ListItem button className={classes.nestedDeep}>
                                    <OrangeCheckbox />
                                    <ListItemText primary="Assenay" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </Collapse>
                </List>

            </div>
        </div>
    )
}

export default Filters;