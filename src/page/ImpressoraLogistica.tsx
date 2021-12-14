import { Button, Card, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from '../components/printProject/ComponentToPrint ';
import { EnumColors } from '../enum/EnumColors';




const useStyle = makeStyles((theme) => ({
    headerMenu: {
        backgroundColor: EnumColors.YELLOW,
        color: EnumColors.PURPLE_MIDLE,
        fontSize: "20px"
    },
    gridMargin: {
        marginTop: "15px"
    },
    gridPaddingBottom: {
        paddingBottom: "15px"
    },
    resetBt: {
        zIndex: 100,
        padding: "10px 10px 10px",
        background: EnumColors.YELLOW,
        borderRadius: "10px",
        margin: theme.spacing(2),
        '&:hover': {
            backgroundColor: EnumColors.PURPLE_MIDLE,
            color: EnumColors.WHITE
        },
        color: EnumColors.WHITE
    },
    plusBt: {
        zIndex: 100,
        padding: "10px 10px 10px",
        background: EnumColors.GREEN,
        borderRadius: "10px",
        margin: theme.spacing(2),
        '&:hover': {
            backgroundColor: EnumColors.PURPLE_MIDLE,
            color: EnumColors.WHITE
        },
        color: EnumColors.WHITE
    },
    downBt: {
        zIndex: 100,
        padding: "10px 10px 10px",
        background: EnumColors.RED,
        borderRadius: "10px",
        margin: theme.spacing(2),
        '&:hover': {
            backgroundColor: EnumColors.PURPLE_MIDLE,
            color: EnumColors.WHITE
        },
        color: EnumColors.WHITE
    },
    printBt: {
        zIndex: 100,
        padding: "10px 10px 10px",
        background: EnumColors.BLUE,
        borderRadius: "10px",
        margin: theme.spacing(2),
        '&:hover': {
            backgroundColor: EnumColors.PURPLE_MIDLE,
            color: EnumColors.WHITE
        },
        color: EnumColors.WHITE
    },
    hiddenAll: {
        display: "none"
    },
    marginTop: {
        marginTop: "10px"
    }
}));

const ImpressoraLogistica: React.FC = () => {


    const classes = useStyle();
    const componentRef = useRef(null);
    const componentRefNext = useRef(null);

    const printLogistc = {
        sender: "Block 4, Unit 6/7, Ashbourne Business Park, Ashbourne, Co. Meath, A84 PD74, Ireland",
        receiver: null,
        amount: null,

    };



    const [currentPrintLogistc, setCurrentPrintLogistc] = useState<any>(printLogistc);
    const [currentPage, setCurrentPage] = useState<any>(0);



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentPrintLogistc({ ...currentPrintLogistc, [name]: value });
    };


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const handlePrintNext = useReactToPrint({
        content: () => componentRefNext.current,
    });

    const nextUp = () => {
        if (currentPage <= currentPrintLogistc.amount) {
            setCurrentPage(currentPage + 1)
        }

    }


    const nextDown = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }

    }

    const nextReset = () => {
        setCurrentPage(0)
    }



    return (
        <>

            <Grid container
                direction="row"
                justifyContent="space-around"
                spacing={8}
                alignItems="center">
                <Grid item
                    xs={12}>
                    <Card  >
                        <CardContent>
                            <Typography variant="h3" component="h1" className={classes.gridPaddingBottom}>
                                Printer
                            </Typography>

                            <Grid item
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                className={classes.marginTop}
                                alignItems="flex-start" >
                                <Grid item >
                                    Sender:
                                </Grid>

                                <Grid item >

                                    <TextField variant="outlined"
                                        multiline
                                        value={currentPrintLogistc.sender}
                                        style={{ width: 500 }}
                                        type="text"
                                        name="sender"
                                        id="sender"
                                        onChange={handleInputChange} />

                                </Grid>

                            </Grid>
                            <Grid item
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                className={classes.marginTop}
                                alignItems="flex-start" >
                                <Grid item >
                                    Receiver:
                                </Grid>

                                <Grid item >

                                    <TextField
                                        variant="outlined"
                                        multiline
                                        value={currentPrintLogistc.receiver}
                                        style={{ width: 500 }}
                                        type="text"
                                        name="receiver"
                                        id="receiver"
                                        onChange={handleInputChange} />


                                </Grid>

                            </Grid>

                            <Grid item
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                className={classes.marginTop}
                                alignItems="flex-start" >
                                <Grid item >
                                    amount:
                                </Grid>

                                <Grid item >
                                    <TextField
                                        variant="outlined"
                                        value={currentPrintLogistc.amount}
                                        style={{ width: 500 }}
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        onChange={handleInputChange} />

                                </Grid>

                            </Grid>


                            <Grid item
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                className={classes.marginTop}
                                alignItems="flex-start" >
                                <Grid item >
                                    current impression: <b>{currentPage}</b>
                                </Grid>

                                <Grid item >
                                    <Button size="small" onClick={nextUp} color="primary"
                                        className={classes.plusBt}>+</Button>

                                    <Button size="small" onClick={nextDown} color="primary"
                                        className={classes.downBt}><b>-</b></Button>

                                    <Button size="small" onClick={nextReset} color="primary"
                                        className={classes.resetBt}>reset</Button>
                                </Grid>

                            </Grid>


                            <Grid item
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                className={classes.marginTop}
                                alignItems="flex-start" >

                                <Grid item >
                                    <h4> Print out</h4>
                                </Grid>

                                <Grid item >
                                    <h4 onClick={nextUp} ><Button size="small" onClick={handlePrintNext} color="primary"
                                        className={classes.printBt} disabled={currentPage >= currentPrintLogistc.amount}>Next</Button></h4>
                                </Grid>

                                <Grid item >
                                    <Button size="small" onClick={handlePrint} color="primary"
                                        className={classes.printBt}>ALL</Button>

                                </Grid>

                            </Grid>






                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


            <div className={classes.hiddenAll}>
                <ComponentToPrint ref={componentRef} sender={currentPrintLogistc.sender} receiver={currentPrintLogistc.receiver} amount={currentPrintLogistc.amount} isAll={true} />

                <ComponentToPrint ref={componentRefNext} sender={currentPrintLogistc.sender} receiver={currentPrintLogistc.receiver} amount={currentPrintLogistc.amount} isAll={false} current={currentPage} />
            </div>
        </>
    );
}

export default ImpressoraLogistica;