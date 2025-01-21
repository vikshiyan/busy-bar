import {FC, useState} from 'react';

import './QuizBlock.scss';
import {questions} from '../../utils/Questions';

const initialFormData = {
  firstName: '',
  lastName: '',
  telefon: '',
  email: '',
};

// const initialErrors = {
//   firstName: false,
//   lastName: false,
//   telefon: false,
//   email: false,
// };

export const QuizBlock: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [items, setItems] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [newPerson, setNewPerson] = useState(initialFormData);
  // const [errors, setErrors] = useState(initialErrors);
  // const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setNewPerson((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAnswerSelect = (answer: string) => {
    setItems((prevItems) => [...prevItems, answer]);
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setNewPerson(initialFormData);
    setItems([]);
    setCurrentQuestion(1);
    setFinished(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPersonWithId = {
      ...newPerson,
      id: Date.now().toString(),
    };
    console.log('New Person:', newPersonWithId, items);
    handleReset();
  };

  return (
    <div className='quiz'>
      {!finished ? (
        <div>
          <h2 className='quiz__title'>
            {questions[currentQuestion - 1].question}
          </h2>
          <div className='quiz__buttons'>
            {questions[currentQuestion - 1].answers.map((answer, index) => (
              <button
                onClick={() => handleAnswerSelect(answer)}
                className='quiz__button'
                key={index}
              >
                {answer}
              </button>
            ))}
          </div>
          <div className='quiz__counter'>
            {currentQuestion}/{questions.length}
          </div>
        </div>
      ) : (
        <div>
          <h2 className='quiz__title'>
            Thank you for your answers! Please fill out the form
          </h2>
          <form onSubmit={handleSubmit} className='quiz__form'>
            <input
              type='text'
              name='firstName'
              value={newPerson.firstName}
              onChange={handleChange}
              placeholder='First Name'
              className='quiz__input'
              required
            />
            <input
              type='text'
              name='lastName'
              value={newPerson.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              className='quiz__input'
              required
            />
            <input
              type='tel'
              name='telefon'
              // ref={phoneInputRef}
              placeholder='Telefon'
              className='quiz__input'
              required
            />
            <input
              type='email'
              name='email'
              value={newPerson.email}
              onChange={handleChange}
              placeholder='Email'
              className='quiz__input'
              required
            />
            <div className='quiz__submit'>
              <button type='submit' className='quiz__submit-button'>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
