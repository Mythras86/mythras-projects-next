import { Metadata } from "next";
import Login from "./login/page";
import Register from "./register/page";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Choose to login or register",
};

export default function Auth () {

  return (
    <main>
      <h1>Authentication</h1>
      <div>
        <div className="neonWhite text1">If you already have a Registration</div>
        <Login></Login>
        <div className="neonWhite text1">If you dont have one yet</div>
        <Register></Register>
      </div>
    </main>
  );
}