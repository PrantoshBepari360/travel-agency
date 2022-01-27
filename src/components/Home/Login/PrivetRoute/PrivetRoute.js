import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivetRoute;