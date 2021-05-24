import React from 'react';

import { PrivateRoute } from 'routes/PrivateRoute';

const QuizDownload = React.lazy(() => import('pages/QuizDownload'));
const QuizForm = React.lazy(() => import('pages/QuizForm'));

export const PrivateRoutes = [
  <PrivateRoute path="/quiz-form" key="/quiz-form">
    <QuizForm />
  </PrivateRoute>,
  <PrivateRoute path="/quiz-download/:id" key="/quiz-download/:id">
    <QuizDownload />
  </PrivateRoute>,
];
