import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

type AlertErrorType = {
    error: null | string
}
export const AlertError = ({error }:AlertErrorType ) => {
    const [show, setShow] = useState(true);
    const closeAlert = () => {
        setShow(false)
    }
    useEffect(() => {
        setTimeout(()=> {
            closeAlert()
        }, 3000)
    },[])
    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>{error}</Alert.Heading>
                    <Button onClick={closeAlert} variant="outline-success">
                        Close Alert!
                    </Button>
            </Alert>
        </>
    );
}

