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
        <main id='formCont'>

            <title>{title}</title>
            <h1>{title}</h1>

            <form id="authForm" {...props} action={myActions}>

                {myState.errors && 
                    myState.errors.map((error: string) => (<p key={error} className='neonRed margTop1 text0 center'>{error}</p> ))
                }

                {children}

                <div className='buttonCont center margTop1'>
                    <button className='neonGreen hover text0 center'>{submitText ?? title}</button>
                    <button type='reset' className='neonRed hover text0 center'>Törlés</button>
                </div>

            </form>
        </main>
    );
}