import { Metadata } from 'next';
import ProfileForm from './ProfileForm';

export const metadata: Metadata = {
  title: "Register",
  description: "Register on my site",
};

export default function Profil() {

  return (
    <main>
      <h1>Profile</h1>
      <ProfileForm></ProfileForm>
    </main>
  );
}