import "./AuthForm.scss";

interface IAuthForm {
    myState: any;
    myActions: (e: any)=>void;
    myPending: any;
    title: string;
    submitText?: string;
    children: React.ReactNode;
    props?: React.ReactNode;
}

export default function AuthForm({myState, myActions, myPending, title, submitText, children, ...props}: IAuthForm) {
    
    return (
        <main id='authForm'>
            <h1>{title}</h1>

            <form id="authForm" {...props} action={myActions}>

                {myState.errors && 
                    <div className="flexCont margBott1">
                    {myState.errors.map((error: string) => (
                    <p key={error} className='neonRed text1 center error'>
                        {error}
                    </p>))
                    }
                    </div>
                }

                {children}

                <div className='buttonCont center margTop1'>
                    <button className='neonGreen hover text2 center'>{submitText ?? title}</button>
                    <button type='reset' className='neonRed hover text2 center'>Reset Form</button>
                </div>

            </form>
        </main>
    );
}