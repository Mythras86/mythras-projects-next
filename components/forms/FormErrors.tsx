import cl from './Forms.module.scss';

interface Props {
    errors: null | Array<string>;
}

export default function FormErrors({errors = []}: Props) {
    
    return (
        <>
        {errors !== null && errors.length > 0 && 
            <div className={cl.errorCont}>
                <div className={cl.errorHead}>Submit cancelled because of the following Errors</div>
                {errors.map((error: string) => (
                    <p key={error} className={cl.error}>
                    {error}
                </p>))
                }
            </div>
        }
        </>
    );
}