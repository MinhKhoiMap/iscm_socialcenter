import React from "react";

// Assets
import logo from "../../assets/images/logo/iscm_logo.webp";

export default function Navbar() {
  return (
    <div className="rounded-[72px] flex items-center justify-between bg-white/50 backdrop-filter backdrop-blur-md border border-white p-3">
      <figure className="flex-1">
        <img src={logo} alt={"ISCM - UEH"} className="w-11 h-11 rounded-full" />
      </figure>
      <p className="text-black text-base text-center font-[600]">ISCM - UEH</p>
      <div className="flex-1"></div>
    </div>
  );
}
