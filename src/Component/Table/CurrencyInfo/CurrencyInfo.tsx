import React from 'react';
import { Charts } from '../../Common/Chart/Chart';
import { useHistory } from 'react-router-dom';

export const CurrencyInfo = () => {
    const history = useHistory();
    const goBackHandler = () => {
        history.goBack()
    }
    return (
        <div>
            <button onClick={goBackHandler} type="button" className="btn btn-outline-primary">Go back</button>
          <Charts />
        </div>
    );
};

