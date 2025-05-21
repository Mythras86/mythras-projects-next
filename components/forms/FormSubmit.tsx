import cl from './Forms.module.scss';
import LoadingSpinner from "../spinners/LoadingSpinner";

interface ISubmitForm {
    formPending: boolean;
    submitText?: string;
    resetText?: string;
}

export default function FormSubmit({formPending, submitText = 'Submit Form', resetText = 'Reset Form'}: ISubmitForm) {
    return (
        <>
            {formPending?
                <LoadingSpinner></LoadingSpinner>
                :
                <div className={cl.formSubmit}>
                    <button className='neonGreen hover text2 center'>{submitText}</button>
                    <button type='reset' className='neonRed hover text2 center'>{resetText}</button>
                </div>
            }
        </>
    );
}
            
