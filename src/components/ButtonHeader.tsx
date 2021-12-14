import React from 'react';
import {  Grid, Link, makeStyles } from '@material-ui/core';
import { EnumColors } from '../enum/EnumColors';

interface ButtonHeaderProps {
    link?: string,
    msg: string,
    startIcon?: React.ReactNode

}

const useStyles = makeStyles((theme) => ({
    headerLink: {
        color: EnumColors.WHITE,
        '&:hover': {
            color: EnumColors.PURPLE_MIDLE,
        },
    }
}));


const ButtonHeader: React.FC<ButtonHeaderProps> = ({ link, startIcon, msg }) => {

    const classes = useStyles()

    return (
        <>
            <Grid
                item

                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={3}
                spacing={2}
            >
                <Grid item  >
                    <Link className={classes.headerLink} href={link} underline="none" target="_blank"
                    > {startIcon} {msg}</Link>
                </Grid>
            </Grid>
        </>

    );
}


export default ButtonHeader;