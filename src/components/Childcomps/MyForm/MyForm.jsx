"use client"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import "./MyForm.css"

const MyForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='twofields flex justify-center items-center gap-5 mb-5'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="name" className='text-purple-200 text-base font-medium'>Name</label>
            <Field type="text" id="name" name="name" placeholder="e.g. John Doe" className="field text-purple-400" />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="email" className='text-purple-300 text-base font-medium'>Email <span className='text-xs text-red-700'>✳</span></label>
            <Field type="email" id="email" name="email" required placeholder="e.g. hello@Yoursite.com" className="field text-purple-400" />
          </div>
        </div>
        <div className='twofields flex justify-center items-center gap-5 mb-5'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="phone" className='text-purple-300 text-base font-medium'>Phone <span className='text-xs text-red-700'>✳</span></label>
            <Field type="tel" id="phone" name="phone" placeholder="e.g. +1342552521" className="field text-purple-400" required />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="selectedOption" className='text-purple-300 text-base font-medium'>I&#39;m interested in <span className='text-xs text-red-700'>✳</span></label>
            <Field type="text" id="selectedOption" name="interest" placeholder="e.g. UI Design" className="field text-purple-400" required />
          </div>
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor="message" className='text-purple-300 text-base font-medium mb-3'>Tell Me More About Your Goals <span className='text-xs text-red-700'>✳</span></label>
          <Field as="textarea" id="message" name="message" rows="5" placeholder="Tell me more about your goals" className="text-purple-400 text-area" required/>
        </div>
        <div className='p-5 bg-orange-300 w-52 send-button'>
          <button className='w-full text-black text-base font-bold' type="submit">Send</button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyForm;
