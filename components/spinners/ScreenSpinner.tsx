import cl from "./ScreenSpinner.module.scss";

interface Props {
  customText?: string;
  customClass?: string;
}

export default function ScreenSpinner({customText = 'Loading...', customClass}: Props) {

  return (
    <>
      <span className={cl.loader}></span>
      <div className={customClass +' '+ cl.loaderText}>{customText}</div>
    </>
  );
}

