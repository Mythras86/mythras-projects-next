import React from 'react';
import cl from './LoadingSpinner.module.scss';

interface Props {
  isLoading: boolean;
  contClass?: string;
  customText?: string;
  customClass?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({isLoading, contClass = 'flexCont center w100', customText = 'Loading...', customClass = 'text2 color-white', children}: Props) {

  return (
    <>{isLoading?
      <div className={contClass}>
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

