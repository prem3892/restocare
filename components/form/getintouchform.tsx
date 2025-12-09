'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Typography } from '@/typography/typography';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Getintouchform({ setShowForm }: { setShowForm: (v: boolean) => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="relative w-11/12 md:w-1/2 bg-white py-5 px-6 rounded-lg shadow-lg">
      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
      >
        <X size={26} />
      </button>

      <Typography
        element="h1"
        text="Get in Touch"
        className="text-2xl md:text-3xl text-center font-bold mb-6 text-gray-800"
      />

      <form className="space-y-4 text-md text-black" onSubmit={handleSubmit}>
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            name="phone"
            type="text"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Message */}
        <textarea
          name="message"
          rows={3}
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
