import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

interface ExperienceComponentProps {
    sender: string,
    receiver: string,
    amount: string,
    current?: string,
    isAll?: Boolean

}

const useStyles = makeStyles((theme) => ({
    pageBreake: {
        pageBreakAfter: "always"
    }
}));

// Using a functional component, you must wrap it in React.forwardRef, and then forward the ref to
// the node you want to be the root of the print (usually the outer most node in the ComponentToPrint)
// https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
const ComponentToPrint = React.forwardRef<ExperienceComponentProps, any>(({ sender, receiver, amount, current, isAll }, ref: any) => {

    const classes = useStyles()

    return (
        <div ref={ref}>
            {isAll ? Array.from(Array(Number(amount)), (e, i) => {
                return (

                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" key={i}
                        className={classes.pageBreake}>
                        <Grid item
                            xs={12}>

                            <hr></hr>
                            <b>Sender</b><br />
                            {sender}

                        </Grid>

                        <Grid item
                            xs={12}>

                            <hr></hr>
                            <b>Receiver</b><br />
                            {receiver}

                        </Grid>

                        <Grid item
                            xs={12}>
                            {i + 1} - {amount}
                        </Grid>

                    </Grid>)


            }) : <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center" key={current}
            className={classes.pageBreake}>
            <Grid item
                xs={12}>

                <hr></hr>
                <b>Sender</b><br />
                {sender}

            </Grid>

            <Grid item
                xs={12}>

                <hr></hr>
                <b>Receiver</b><br />
                {receiver}

            </Grid>

            <Grid item
                xs={12}>
                {current} - {amount}
            </Grid>

        </Grid>}

        </div>
    );
});


export default ComponentToPrint;