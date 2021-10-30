import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './AlertError.scss'
import { getDataAssetsTC } from '../../../Bll/Crypt-coin-list-reducer';
import { useDispatch } from 'react-redux';

type AlertErrorType = {

}
export const AlertError = (props:AlertErrorType ) => {
    const [counter, setCounter] = useState(7);
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const closeAlert = () => {
        setShow(false)
    }
    useEffect(() => {
        counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : dispatch(getDataAssetsTC())
    }, [counter,dispatch]);
    return (
        <>
                    <Alert className="alert" show={show} variant="primary">
                        <Alert.Heading>The server is overloaded</Alert.Heading>
                        <Alert.Heading>Automatic reboot: {counter}</Alert.Heading>
                        <Button onClick={closeAlert} variant="outline-primary">
                            Close Alert!
                        </Button>
                    </Alert>
        </>
    );
}

