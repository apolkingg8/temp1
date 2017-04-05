import React from 'react';
import { Router } from 'react-router';
import routes from '../routes';


export default function Root({ history }: RootType) {
  return (
    <Router key={Math.random()} history={history} routes={routes} />
  );
}
