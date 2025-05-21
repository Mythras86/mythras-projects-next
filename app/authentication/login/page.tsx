import LoginForm from './LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login",
  description: "Login to my site",
};

export default function Login () {

  return (
    <main>
      <h1>Login</h1>
      <LoginForm></LoginForm>
    </main>
  );
}