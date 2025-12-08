'use client';

import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // alert("Form submitted successfully!");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* contact form section */}
      <div>
        <label htmlFor="name" className="text-sm">
          Full name
        </label>
        <input
          id="name"
          type="text"
          placeholder=""
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#C00404] text-gray-50
          cursor-pointer hover:bg-white border-2 hover:border-[#C00404] hover:text-[#C00404] hover:shadow-lg transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};
