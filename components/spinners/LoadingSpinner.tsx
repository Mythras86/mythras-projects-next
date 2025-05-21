import cl from './LoadingSpinner.module.scss';

interface ILoadingSpinner {
  customText?: string;
  customClass?: string;
}

export default function LoadingSpinner({customText = 'Loading...', customClass = 'text2 color-white'}: ILoadingSpinner) {

  return (
    <div className='flexCont center'>
      <span className={cl.loader}></span>
      <span className={customClass}>{customText}</span>
    </div>
  );
}

