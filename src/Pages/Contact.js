import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    form:{
        height:"1100px",
        position:"relative",
        left:"590px",
        top:"140px"
    }
}));


function Contact() {
    const classes = useStyles();

    return (
       
<iframe className={classes.form} src="https://docs.google.com/forms/d/e/1FAIpQLSeunMIVOtBwmVF-IFLI924A6XCPPg2R52fwK5iWC1UX_K_cNg/viewform?embedded=true" width="640" height="673" frameborder="0" marginheight="0" marginwidth="0">
           
        </iframe>

    );
}

export default Contact;