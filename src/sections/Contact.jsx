import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Menampilkan pop-up sukses
    setIsSubmitted(true);

    // Mengosongkan form setelah submit
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      message: ''
    });

    // Menghilangkan pop-up setelah 3 detik
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div id='contact' className='bg-white w-full relative'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px] font-bold'
          >
            REACH US FOR ANY QUERY
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-3xl italic text-gray-600 mt-[60px]'>Lorem ipsum dolor sit amet consectetur adipisicing elite. Voluptatibus, incidunt?</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-4 w-full'
          >
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              placeholder='Enter Fullname'
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter Email'
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
              required
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder='Enter Phone Number'
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Enter your message'
              rows="4"
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
              required
            ></textarea>
            <motion.button
              type="submit"
              variants={zoomInVariants}
              className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full'
            >
              SUBMIT
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Pop-up sukses */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center">
            <p className="text-green-600 text-2xl font-semibold">Thank you! Your message has been sent.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
