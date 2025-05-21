import cl from './Forms.module.scss';

interface ISubmitForm {
    submitText?: string;
    resetText?: string;
}

export default function FormSubmit({submitText = 'Submit Form', resetText = 'Reset Form'}: ISubmitForm) {
    return (
        <div className={cl.formSubmit}>
            <button className='neonGreen hover text2 center'>{submitText}</button>
            <button type='reset' className='neonOrange hover text2 center'>{resetText}</button>
        </div>
    );
}
            
