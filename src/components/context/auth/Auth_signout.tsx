"use client";
// import { signOut } from "@/libs/redux/features/authSlice";
// import { AppDispatch } from "@/libs/redux/store";
// import { useDispatch } from "react-redux";
const Auth_signout = () => {
  //   const dispatch: AppDispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        //   dispatch(signOut());
      }}
      className="coolLink"
    >
      Logout
    </button>
  );
};

export default Auth_signout;
