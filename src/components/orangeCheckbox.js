import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

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

export default OrangeCheckbox;
