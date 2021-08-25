import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Select, Typography } from '@material-ui/core';
import Impacter from './impacter';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2)
        // flex: 1
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
        // flex: 1
    },
    topRowLeftItem: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "left"
    },
    topRowItem: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: "left",
        alignItems: 'center'
    },
    subtitle: {
        color: '#8EA1B2'
    },
    select: {
        color: "#8EA1B2"
    },
    bold: {
        fontWeight: 'bold'
    }
}));

const impacters = [
    {
        name: "Alain Gallu",
        function1: "Président(e) du conseil départemental",
        function2: "Membre du conseil Municipal",
        function1Loc: "Aube",
        function2Loc: "Bouilly",
        apparitionCount: 173
    },
    {
        name: "Marie-Pierre Mouton",
        function1: "Anc. Vice-Président(e) d'EPCI",
        function2: "Anc. Maire",
        function1Loc: "CA Troyes Champagne Métropole",
        function2Loc: "Bucey-en-Othe",
        apparitionCount: 46
    },
    {
        name: "Jean-Michel Catelinois",
        function1: "Vice-Président(e) d'EPCI",
        function2: "Anc. Membre du conseil Municipal",
        function1Loc: "CA des portes de Romilly-Sur-Seine",
        function2Loc: "Buchères",
        apparitionCount: 42
    }
];

const Results = () => {
    const classes = useStyles();
    const [count, setCount] = useState(25);
    const [filter, setFilter] = useState("Apparitions presse");

    return (
        <div className={classes.root}>
            <div className={classes.topRow}>
                <div className={classes.topRowLeftItem}>
                    <Typography className={classes.bold} variant="h6">
                        357 résultats
                    </Typography>
                    <Typography className={classes.subtitle} variant="subtitle1">
                        Issu du répertoire National des Élus
                    </Typography>
                </div>
                <div className={classes.topRowItem}>
                    <Typography className={classes.subtitle} variant="subtitle1">
                        Résultats par page :{'\u00A0'}
                    </Typography>
                    <Select
                        id="select-page-lenght"
                        className={classes.select}
                        classes={{
                            root: classes.select,
                            icon: classes.select,
                        }}
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        disableUnderline
                        IconComponent={ExpandMore}
                    >
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </div>
                <div className={classes.topRowItem}>
                    <Typography className={classes.subtitle} variant="subtitle1">
                        Trier par :{'\u00A0'}
                    </Typography>
                    <Select
                        id="select-filter"
                        className={classes.select}
                        classes={{
                            root: classes.select,
                            icon: classes.select,
                        }}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        disableUnderline
                        IconComponent={ExpandMore}
                    >
                        <MenuItem value={'Apparitions presse'}>Apparitions presse</MenuItem>
                        <MenuItem value={'Apparitions publiques'}>Apparitions publiques</MenuItem>
                    </Select>
                </div>
            </div>
            {impacters.map(impacter => <Impacter {...impacter} />)}
        </div>
    )
}

export default Results;