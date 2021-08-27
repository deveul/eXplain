import React, { useEffect, useState } from 'react';
import useDimensions from "react-use-dimensions";

import { Collapse, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Epci from './epci';
import OrangeCheckbox from './orangeCheckbox';
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { CallReceived } from '@material-ui/icons';

const Territories = () => {
    const [open, setOpen] = useState(true);
    const [checked, setChecked] = useState(true);
    const [territory, setTerritory] = useState(null);
    const location = useLocation();
    const [maxHeight, setMaxHeight] = useState('40vh')
    const [ref, { x, y, width }] = useDimensions();

    useEffect(() => {
        console.log(ref)
        console.log(x)
        console.log(y)
        console.log(width)
        console.log(window.innerHeight)
        setMaxHeight(window.innerHeight - y - 8)
    }, [x,y,width])

    useEffect(() => {
        if (location && location.pathname.indexOf('FRDEPA') == 8) {
            fetch(`/territory?code=FRDEPA${location.pathname.slice(14, 16)}`).then(res => res.json()).then(data => {
                console.log("data:", data)
                if (data.territory) {
                    setTerritory(data.territory);
                }
            });
        } else {
            fetch('/territory?code=FRDEPA10').then(res => res.json()).then(data => {
                console.log("data:", data)
                if (data.territory) {
                    setTerritory(data.territory);
                }
            });
        }
    }, [location]);

    const handleClick = () => {
        setOpen(!open);
    };

    if (!territory) return null;
    return (
        <List ref={ref} style={{ maxHeight: maxHeight, overflow: 'auto' }} dense={true}>
            <ListItem button>
                <IconButton size='small' onClick={handleClick}>
                    {open ? <ExpandMore /> : <ExpandMore style={{ transform: 'rotate(-90deg)' }} />}
                </IconButton>
                <OrangeCheckbox name={`${territory.parent}CheckBox`} checked={checked} onChange={() => setChecked(!checked)} />
                <ListItemText primary={territory.parent} />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {territory.children.map((child, index) => {
                    return <Epci key={index} epci={child} parentChecked={checked} />
                })}
            </Collapse>
        </List>
    )
}

export default Territories;