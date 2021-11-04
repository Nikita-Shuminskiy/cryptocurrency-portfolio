import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './AlertError.scss'
type AlertErrorType = {
    error?:string
}
export const AlertError = ({error}: AlertErrorType) => {
    const [show, setShow] = useState(true);
    const closeAlert = () => {
        setShow(false)
    }
    return (
        <>
                    <Alert className="alert" show={show} variant="primary">
                        <Alert.Heading>{error ? error : 'Server error, reload the page'}</Alert.Heading>
                        <Button onClick={closeAlert} variant="outline-primary">
                            Close Alert!
                        </Button>
                    </Alert>
        </>
    );
}

