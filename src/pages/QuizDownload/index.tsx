import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { getQuizFile } from 'api/quiz';
import closeImg from 'assets/close.svg';
import { useAuth } from 'contexts/AuthContext';

import { Loading } from 'components/Loading';
import { QuizPageLayout } from 'components/QuizPageLayout';

import { Container, LoadingContainer } from './styles';

export function QuizDownload(): JSX.Element {
  const { updateAuth } = useAuth();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function downloadQuiz() {
    setIsLoading(true);
    try {
      const { data } = await getQuizFile(id);
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `${id.padStart(2, '0')}._Quiz_Fato_ou_Fake.zip`,
      );
      document.body.appendChild(link);
      link.click();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  function logout() {
    updateAuth('');
    history.push('/');
  }

  return (
    <QuizPageLayout>
      <Container>
        <div>
          <button type="button" className="close-btn" onClick={logout}>
            <img src={closeImg} alt="Fechar" />
          </button>
          <h1>Quiz feito com sucesso!</h1>
          <div className="buttons">
            <Link to="/quiz-form">Voltar para edição</Link>
            <button type="button" className="download" onClick={downloadQuiz}>
              Download de Quiz
              {isLoading ? (
                <LoadingContainer>
                  <Loading color="orange" />
                </LoadingContainer>
              ) : null}
            </button>
          </div>
        </div>
      </Container>
    </QuizPageLayout>
  );
}
