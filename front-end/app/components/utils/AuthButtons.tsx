import { useRouter } from "next/navigation";
import React from "react";

const AuthButtons = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-2 mr-[8px]">
      <button
        onClick={() => router.push("/authentication/login")}
        className="bg-black text-white w-[69.33px] h-[38px] py-1 rounded-[30px] text-sm whitespace-nowrap font-semibold enabled:hover:bg-[rgba(0,0,0,0.87)]"
      >
        Log in
      </button>
      <button
        onClick={() => router.push("/authentication/register")}
        className="bg-white text-black w-[78.34px] h-[38px] py-1 rounded-[30px] border border-gray-300 text-sm whitespace-nowrap font-semibold hidden md:block enabled:hover:bg-[rgba(0,0,0,0.020)]"
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthButtons;
