import React from "react";

const Input = ({ label, placeholder }) => {
  return (
    <section className="flex flex-col items-center">
      <label className="font-cursive text-[#5a3e2b] text-lg" htmlFor="isComing">
        {label}
      </label>
      <input
        name="isComing"
        type="text"
        className="w-[250px] md:w-[300px] px-4 py-2 text-[#5a3e2b] bg-[#fff5eb] 
                 border border-[#d97706] rounded-2xl shadow-md 
                 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-[#b45309] 
                 transition-all duration-300"
        placeholder={placeholder}
      />
    </section>
  );
};

export default Input;
