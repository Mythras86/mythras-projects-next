import React from 'react';
import cl from './LoadingSpinner.module.scss';

interface Props {
  isLoading: boolean;
  customText?: string;
  customClass?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({isLoading, customText = 'Loading...', customClass = 'text2 color-white', children}: Props) {

  return (
    <>{isLoading?
      <div className='flexCont center'>
        <span className={cl.loader}></span>
        <span className={customClass}>{customText}</span>
      </div>
      :
      <>
        {children}
      </>
    }</>
  );
}

