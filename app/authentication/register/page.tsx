import RegisterForm from './RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Register",
  description: "Register on my site",
};

export default function Register() {

  return (
    <main>
      <h1>Register</h1>
      <RegisterForm></RegisterForm>
    </main>
  );
}