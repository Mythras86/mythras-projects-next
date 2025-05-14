'use client'

import Input from '@/components/forms/Input';
import { useSession } from 'next-auth/react';
import AuthForm from '../../components/forms/Form';
import { useActionState } from 'react';
import { updateUser } from '@/app/api/users/users.route';
import { UserDto } from '@/app/api/users/user.dto';
import { isNotEmpty, hasMinLength } from '../authentication/components/validation';

export default function Profil() {

  const { data: session, status, update} = useSession();
  const [formState, formAction, formPending] = useActionState(submitAndUpdate, {errors: null});

  const name: string | null | undefined = session?.user?.name;
  const email: string | null | undefined = session?.user?.email;

  async function submitAndUpdate(prevFormState: any, formData: any): Promise<any> {

  let errors = [];

  const user: UserDto = {
    name: formData.get('name'),
    email: formData.get('email')
  };

  if (!isNotEmpty(user.name!) || !hasMinLength(user.name!, 4)) {
    errors.push('Hibás név, legalább 4 karakter hosszúnak kell lennie!');
  }

  if (errors.length > 0) {
    return {errors, enteredValues: {
      name
    }};
  }

  const res = await updateUser(user);

  // if (res.error) {
  //   return res.error; nem műxik de nem tom mér
  // }

  update({name: user.name});

  return {errors: null};
  
  }

  return (
    <AuthForm myState={formState} myActions={formAction} myPending={formPending} title={'Profil'} submitText='Mentés'>
      <Input label='Név' id='name' type='text' defaultValue={name} />
      <div className='neonWhite text1 center'>{email}</div>
      <div hidden={true}>
        <Input readOnly  label='Email' id='email' type='email' defaultValue={email} />
      </div>
    </AuthForm>
  );
}