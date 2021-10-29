import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './AlertError.scss'

type AlertErrorType = {

}
export const AlertError = (props:AlertErrorType ) => {
    const [show, setShow] = useState(true);
    const closeAlert = () => {
        setShow(false)
    }
  /*  useEffect(() => {
        setTimeout(()=> {
            closeAlert()
        }, 3000)
    },[])*/
    return (
        <>
                    <Alert className="alert" show={show} variant="primary">
                        <Alert.Heading>Server error, please repeat later</Alert.Heading>
                        <Button onClick={closeAlert} variant="outline-primary">
                            Close Alert!
                        </Button>
                    </Alert>
        </>
    );
}

