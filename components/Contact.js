import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const form = useRef();
  const buttonref = useRef();
  const divCol = useRef();
  const checkRef = useRef();
  const xmarkRef = useRef();

  const ejsNameRef = useRef();
  const ejsSurnameRef = useRef();
  const ejsEmailRef = useRef();
  const ejsPhoneNumberRef = useRef();
  const ejsMessageRef = useRef();
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [nameError, nameErrorMessage] = useState('');
  const [surnameError, surnameErrorMessage] = useState('');
  const [emailError, emailErrorMessage] = useState('');
  const [phoneError, phoneErrorMessage] = useState('');
  const [messageError, messageErrorMessage] = useState('');

  const handleNameBlur = () => {
    const inputValue = ejsNameRef.current.value;

    if (inputValue.length < 1) {
      nameErrorMessage('Upewnij się ,że podałeś imię');
    } else {
      nameErrorMessage('');
    }
  };

  const handleSurnameBlur = () => {
    const inputValue = ejsSurnameRef.current.value;

    if (inputValue.length < 1) {
      surnameErrorMessage('Upewnij się ,że podałeś nazwisko');
    } else {
      surnameErrorMessage('');
    }
  };

  const handleEmailBlur = () => {
    const inputValue = ejsEmailRef.current.value;

    if (inputValue.length < 1) {
      emailErrorMessage('Upewnij się ,że podałeś poprawny adress email');
    } else {
      emailErrorMessage('');
    }
  };

  const handlerPhone = () => {
    const inputValue = ejsPhoneNumberRef.current.value;

    if (inputValue.length < 9) {
      phoneErrorMessage('Numer powinien zawierać 9 cyfr');
    } else {
      phoneErrorMessage('');
    }
  };

  const handlerMessage = () => {
    const inputValue = ejsMessageRef.current.value;

    if (inputValue.length < 4) {
      messageErrorMessage('Wiadomośc się sama nie napisze');
    } else {
      messageErrorMessage('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !(ejsNameRef.current.value.trim()
      && ejsSurnameRef.current.value.trim()
      && ejsEmailRef.current.value.trim()
      && ejsPhoneNumberRef.current.value.trim()
      && ejsMessageRef.current.value.trim())
    ) {
      console.log('Musisz wypełnić wszystkie pola');
      return;
    }

    if (nameError || emailError || surnameError || phoneError || messageError) {
      alert('Sprawdź poprawność formularza');
      return; // Kończymy funkcję, jeśli są jakiekolwiek błędy
    }
    buttonref.current.classList.add('loader');
    emailjs.sendForm('service_uabo36w', 'template_8wqvshg', form.current, 't5m6r1qhfg3OrtbCE')
      .then((result) => {
        buttonref.current.classList.remove('loader');
        checkRef.current.classList.toggle('show');
        setTimeout(() => {
          checkRef.current.classList.toggle('show');
        }, 2000);
      }, (error) => {
        buttonref.current.classList.toggle('show');
        xmarkRef.current.classList.toggle('show');
        setTimeout(() => {
          xmarkRef.current.classList.toggle('show');
        }, 2000);
      });
    e.target.reset();
  };

  return (

    <div className="flex justify-center items-center">
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] shadow-md rounded p-8  h-full text-sm sm:text-md lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl" action="/send-data-here" method="post">
        <div className="mb-4 font-bold text-base">
          <div className="text-sm py-2">Podaj swoje imię</div>
          <label htmlFor="name">
            <input ref={ejsNameRef} onBlur={handleNameBlur} onChange={handleNameBlur} className=" shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="user_name" placeholder="Imię" />
          </label>
          <p className="text-sm text-red-400 pt-2">{nameError}</p>
        </div>
        <div className="mb-4 font-bold text-base">
          <div className="text-sm py-2">Podaj swoje nazwisko</div>
          <label className="mb-4" htmlFor="surname">
            <input ref={ejsSurnameRef} onBlur={handleSurnameBlur} onChange={handleSurnameBlur} className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="surname" name="user_surname" placeholder="Nazwisko" />
          </label>
          <p className="text-sm text-red-400 pt-2">{surnameError}</p>
        </div>
        <div className="mb-4 font-bold text-base">
          <div className="text-sm py-2">Podaj swoje adres email</div>
          <label className="mb-4" htmlFor="email">
            <input ref={ejsEmailRef} onBlur={handleEmailBlur} onChange={handleEmailBlur} className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="user_email" placeholder="Adres email" required />
          </label>
          <p className="text-sm text-red-400 pt-2">{emailError}</p>
        </div>
        <div className="mb-4 font-bold text-base">
          <div className="text-sm py-2">Podaj swój numer telefonu</div>
          <label className="mb-4" htmlFor="phoneNumber">
            <input ref={ejsPhoneNumberRef} onBlur={handlerPhone} onChange={handlerPhone} className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phoneNumber" name="user_phone" placeholder="623865469" inputMode="numeric" pattern="\d{9}" maxLength="9" required />
          </label>
          <p className="text-sm text-red-400 pt-2">{phoneError}</p>
        </div>
        <div className="mb-4 font-bold text-base">
          <div className="text-sm py-2">Treść wiadomości</div>
          <label className="mb-4" htmlFor="message">
            <textarea ref={ejsMessageRef} onBlur={handlerMessage} onChange={handlerMessage} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline leading-6" id="message" name="message" placeholder="Chciała/Chciałbym zamówić miód" rows={4} cols={50} required />
          </label>
          <p className="text-sm text-red-400 pt-2">{messageError}</p>
        </div>
        <div ref={divCol} className="flex flex-row justify-center items-center">
          <button className="text-blue-500 text-lg sm:text-xl hover:text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit" id="submit" name="submit">
            Wyślij Wiadomość
          </button>
          <div ref={buttonref} className="" />
          <XMarkIcon ref={xmarkRef} className="h-6 w-6 text-red-500 show" />
          <CheckIcon ref={checkRef} className="h-6 w-6 text-green-500 show" />
        </div>
      </form>
    </div>

  );
}
