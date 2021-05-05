import React, { useState } from 'react';
import { QuizPageLayout } from '../../components/QuizPageLayout';
import { useHistory, Link, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';

import { Container, LoadingContainer } from './styles';
import { Loading } from '../../components/Loading';

export function QuizDownload () : JSX.Element {
  const { auth, updateAuth } = useAuth();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function downloadQuiz() {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/complete_quiz_file?quiz_id=${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
        responseType: 'arraybuffer',
      })
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${id.padStart(2, '0')}._Quiz_Fato_ou_Fake.zip`);
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
            <img src={closeImg} alt="Fechar"/>
          </button>
          <h1>Quiz feito com sucesso!</h1>
          <div className="buttons">
            <Link to="/quiz-form">Voltar para edição</Link>
            <button type="button" className="download" onClick={ downloadQuiz }>
              Download de Quiz
              {isLoading
                ? (
                <LoadingContainer>
                  <Loading color="orange" />
                </LoadingContainer>)
                : null}
            </button>
          </div>
        </div>
      </Container>
    </QuizPageLayout>
  );
}
