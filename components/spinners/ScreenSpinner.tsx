import Overlay from "../Overlay";
import cl from "./ScreenSpinner.module.scss";

interface IScreenSpinner {
  customText?: string;
  customClass?: string;
}

export default function ScreenSpinner({customText = 'Loading...', customClass}: IScreenSpinner) {

  return (
    <Overlay>
      <span className={cl.loader}></span>
      <div className={customClass +' '+ cl.loaderText}>{customText}</div>
    </Overlay>
  );
}

