import React from 'react';
import './Portfolio.scss'
import { useHistory } from 'react-router-dom';

export const Portfolio = () => {
    const history = useHistory();
     const goBackHandler = () => {
        history.goBack()
    }
    return (
        <div>
            <button onClick={goBackHandler} type="button" className="btn btn-outline-primary">Go back</button>
            <button type="button" className="btn btn-outline-secondary">Update currencies</button>

        </div>
    );
};