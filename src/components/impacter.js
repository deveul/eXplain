import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        marginBlock: 10
    },
    leftItem: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    middleItem: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rightItem: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    alignLeft: {
        display: 'flex',
        flex: 1,
        alignSelf: 'flex-start',
    },
    alignRight: {
        display: 'flex',
        alignSelf: 'flex-end',
    },
    name: {
        color: '#000',
        fontWeight: 600
    },
    active: {
        color: '#000',
        fontWeight: 400
    },
    inactive: {
        color: '#8EA1B2',
        fontWeight: 300
    },
    hideDot: {
        flex: 1,
        color: '#8EA1B2',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

const Impacter = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container wrap="nowrap" spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.leftItem}>
                        <Typography className={classes.name} variant="body1">
                            {props.name.toUpperCase()}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}
                    style={{
                        overflow: "hidden",
                        padding: "12px 0px 12px 12px"
                    }}
                >
                    <div className={classes.middleItem}>
                        <Typography
                            className={clsx(classes.alignLeft, {
                                [classes.active]: !props.function1.startsWith("Anc."),
                                [classes.inactive]: props.function1.startsWith("Anc.")
                            })}
                            noWrap
                            variant="body1">
                            {props.function1}
                            <span className={classes.inactive}>.........................................................................</span>
                        </Typography>
                        <Typography
                            noWrap
                            className={clsx(classes.alignLeft, {
                                [classes.active]: !props.function2.startsWith("Anc."),
                                [classes.inactive]: props.function2.startsWith("Anc.")
                            })}
                            variant="body1">
                            {props.function2}
                            <span className={classes.inactive}>.........................................................................</span>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}
                    style={{
                        padding: "12px 12px 12px 0px"
                    }}
                >
                    <div className={classes.middleItem}>
                        <Typography
                            className={clsx(classes.alignLeft, {
                                [classes.active]: !props.function1.startsWith("Anc."),
                                [classes.inactive]: props.function1.startsWith("Anc.")
                            })}
                            variant="body1">
                            {props.function1Loc}
                        </Typography>
                        <Typography
                            className={clsx(classes.alignLeft, {
                                [classes.active]: !props.function2.startsWith("Anc."),
                                [classes.inactive]: props.function2.startsWith("Anc.")
                            })}
                            variant="body1">
                            {props.function2Loc}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className={classes.rightItem}>
                        <Typography className={classes.alignRight} variant="h5">
                            {props.apparitionCount}
                        </Typography>
                        <Typography className={classes.alignRight} variant="caption">
                            apparitions
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Impacter;