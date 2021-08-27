import React, { useEffect, useState } from 'react';

import { Collapse, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Epci from './epci';
import OrangeCheckbox from './orangeCheckbox';
import { useLocation } from 'react-router-dom';

const Territories = () => {
    const [open, setOpen] = useState(true);
    const [checked, setChecked] = useState(true);
    const [territory, setTerritory] = useState(null);
    const location = useLocation();

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
        <List style={{ maxHeight: '40vh', overflow: 'auto' }} dense={true}>
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