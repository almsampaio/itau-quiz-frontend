import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getQuizFile } from 'api/quiz';
import closeImg from 'assets/close.svg';
import { useAuth } from 'contexts/AuthContext';

import Loading from 'components/Loading';
import QuizPageLayout from 'components/QuizPageLayout';

import * as S from './styles';

export default function QuizDownload(): JSX.Element {
  const { logout } = useAuth();
  const { id } = useParams<{ id: string }>();
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

  return (
    <QuizPageLayout>
      <S.Container>
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
                <S.LoadingContainer>
                  <Loading color="orange" />
                </S.LoadingContainer>
              ) : null}
            </button>
          </div>
        </div>
      </S.Container>
    </QuizPageLayout>
  );
}
