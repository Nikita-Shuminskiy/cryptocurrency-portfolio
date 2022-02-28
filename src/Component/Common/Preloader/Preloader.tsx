import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Preloader.scss'

export const Preloader = () => {
  return (
    <div className="preloader">
      <Spinner animation="border" variant="primary"/>
    </div>
  );
};

