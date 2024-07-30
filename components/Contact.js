import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const form = useRef();
  const buttonref = useRef();
  const divCol = useRef();
  const checkRef = useRef();
  const xmarkRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    buttonref.current.classList.toggle('show');
    emailjs.sendForm('service_uabo36w', 'template_8wqvshg', form.current, 't5m6r1qhfg3OrtbCE')
      .then((result) => {
        buttonref.current.classList.toggle('show');
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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] shadow-md rounded p-8  h-full text-sm sm:text-md lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl  " action="/send-data-here" method="post">
      <label className="mb-4" htmlFor="first">
        <input className=" shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="first" name="user_name" placeholder="Your Name" />
      </label>
      <label className="mb-4" htmlFor="last">
        <input className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="last" name="user_surname" placeholder=" Your Surname" />
      </label>
      <label className="mb-4" htmlFor="last">
        <input className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="last" name="user_email" placeholder="Your Email" />
      </label>
      <label className="mb-4" htmlFor="last">
        <input className="w-full shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="last" name="user_phone" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
      </label>
      <label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline leading-6" name="message" placeholder="Message" rows={4} cols={50} />
      </label>
      <div ref={divCol} className="flex flex-row justify-center items-center ">
        <button className="text-blue-500 text-lg sm:text-xl hover:text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit">
          Send Message
        </button>
        <div ref={buttonref} className="loader show" />
        <XMarkIcon ref={xmarkRef} className="h-6 w-6 text-red-500 show" />
        <CheckIcon ref={checkRef} className="h-6 w-6 text-green-500 show" />
      </div>

    </form>
  );
}
