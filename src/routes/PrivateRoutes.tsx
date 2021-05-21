import QuizDownload from 'pages/QuizDownload';
import QuizForm from 'pages/QuizForm';
import { PrivateRoute } from 'routes/PrivateRoute';

export function PrivateRoutes() {
  return (
    <>
      <PrivateRoute path="/quiz-form">
        <QuizForm />
      </PrivateRoute>
      <PrivateRoute path="/quiz-download/:id">
        <QuizDownload />
      </PrivateRoute>
    </>
  );
}
