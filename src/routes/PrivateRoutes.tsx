import QuizDownload from 'pages/QuizDownload';
import QuizForm from 'pages/QuizForm';
import { PrivateRoute } from 'routes/PrivateRoute';

export const PrivateRoutes = [
  <PrivateRoute path="/quiz-form" key="/quiz-form">
    <QuizForm />
  </PrivateRoute>,
  <PrivateRoute path="/quiz-download/:id" key="/quiz-download/:id">
    <QuizDownload />
  </PrivateRoute>,
];
