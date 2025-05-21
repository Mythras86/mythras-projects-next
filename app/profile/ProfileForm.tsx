'use client';

import FormInput from "@/components/forms/FormInput";
import { isNotEmpty, hasMinLength } from "@/components/forms/formValidation";
import { useSession } from "next-auth/react";
import Form from "next/form";
import { useActionState } from "react";
import { UserDto } from "../api/users/user.dto";
import { updateUser } from "../api/users/users.route";
import FormErrors from "@/components/forms/FormErrors";
import FormSubmit from "@/components/forms/FormSubmit";

export default function ProfileForm() {

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
        <Form action={formAction}>
            <FormErrors errors={formState.errors}></FormErrors>
            
            <FormInput label='Név' id='name' type='text' autoComplete='name' defaultValue={name} />
            <div className='neonWhite text1 center'>{email}</div>
            <div hidden={true}>
            <FormInput readOnly  label='Email' id='email' type='email' autoComplete='email' defaultValue={email} />
            </div>

            <FormSubmit formPending={formPending} submitText="Update" resetText="Reset"></FormSubmit>
        </Form>

    );
}