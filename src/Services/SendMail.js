import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'phucvo140902@gmail.com', 
      to_name: 'Phuc Vo',
      subject: formData.subject,
      message: formData.message,
    };

    // Gửi email sử dụng EmailJS
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully!', response.status, response.text);
    return { success: true, message: 'Email đã được gửi thành công!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Gửi email thất bại. Vui lòng thử lại!' };
  }
};