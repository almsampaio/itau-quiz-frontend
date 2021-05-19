import request from 'api/config';

export const getQuizTypes = async () => request.authorized().get('/type_quiz');

export const getQuizFile = async (id: string) =>
  request
    .authorized()
    .get(`/complete_quiz_file?quiz_id=${id}`, { responseType: 'arraybuffer' });

export const createNewQuiz = async (formData: FormData) =>
  request.authorized().post(`/complete_quiz`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
