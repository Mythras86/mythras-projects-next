import "./SpinnerScreen.scss";
import "./SpinnerSmall.scss";

interface ISpinner {
  forScreen?: boolean
}

export default function Spinner({forScreen = false}: ISpinner) {

  return (
    <span className={forScreen? 'loaderScreen' : 'loaderSmall'}></span>
  );
}

