import sp from "./Spinner.module.scss";

interface ISpinner {
  width: string
}

export default function Spinner({width}: ISpinner) {

  return (
    <div className={sp.loader} style={{width: width}}></div>
  );
}

