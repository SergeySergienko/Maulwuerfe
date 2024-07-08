import { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='w-full'>
      <h2 className='mb-4 text-4xl text-red-600 font-accent'>
        Kontaktiere uns
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='w-full h-12 py-1 px-4 rounded-xl bg-white/10 placeholder:text-white/40 text-white focus:outline-none'
            placeholder='Drucken Sie Ihren Namen'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='email'>
            E-Mail
          </label>
          <input
            type='email'
            id='email'
            className='w-full h-12 py-1 px-4 rounded-xl bg-white/10 placeholder:text-white/40 text-white focus:outline-none'
            placeholder='Drucken Sie Ihre E-Mail aus'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='message'>
            Nachricht
          </label>
          <textarea
            id='message'
            className='w-full h-28 py-3 px-4 rounded-xl bg-white/10 placeholder:text-white/40 text-white focus:outline-none resize-none overflow-auto'
            rows='4'
            placeholder='Drucken Sie Ihre Nachricht'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit' className='btn-primary'>
          Senden
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
