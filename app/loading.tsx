import st from "./loading.module.scss";

export default function Spinner() {

  return (
    <div className={st.spinnerCont}>
      <div className={st.loader}></div>
    </div>
  );
}

