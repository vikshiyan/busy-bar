import {FC, useState} from 'react';
import axios from 'axios';
import IntlTelInput from 'intl-tel-input/react';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/utils.js';
import './QuizBlock.scss';
import {questions} from '../../utils/Questions';
import {Slide, ToastContainer, toast} from 'react-toastify';


const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
};

const errorMap = [
  'Invalid number',
  'Invalid country code',
  'Number too short',
  'Number too long',
  'Invalid number',
];
export const QuizBlock: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [items, setItems] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [newPerson, setNewPerson] = useState(initialFormData);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [number, setNumber] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number | null>(null);

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isValid) {
    const dataToSubmit = {
      ...newPerson,
      number,
      answers: items,
    };
    try {
      const response = await axios.post(
        'https://httpbin.org/post',
        dataToSubmit
      );
      console.log('Data submitted successfully:', response.data);
      toast.success('Data submitted successfully!');
      // Handle successful submission (e.g., show a success message, reset form, etc.)
      handleReset();
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Error submitting data!');
      // Handle error (e.g., show an error message)
    }
  } else {
    const errorMessage = errorMap[errorCode || 0] || "Invalid number";
    toast.error(`Error: ${errorMessage}`);}
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
            {/* <input
              type='tel'
              name='telefon'
              value={newPerson.telefon}
              onChange={handleChange}
              placeholder='Telefon'
              className='quiz__input'
              required
              ref={telefonInputRef}
            /> */}
            
            <IntlTelInput
              onChangeNumber={setNumber}
              onChangeValidity={setIsValid}
              onChangeErrorCode={setErrorCode}
              inputProps={{
                className: "quiz__input",
                
              }}
              initOptions={{
                
                initialCountry: "ua",
                loadUtils: () => import('intl-tel-input/build/js/utils.js'),
              }}
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
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Slide}
      />
    </div>
  );
};
