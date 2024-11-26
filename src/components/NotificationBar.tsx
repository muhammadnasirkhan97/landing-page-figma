import React from "react";

const NotificationBar = () => {
  return (
    <div className="bg-black text-white w-full h-10 overflow-hidden relative">
      <div className="absolute w-full h-full flex items-center animate-marquee whitespace-nowrap ">
        <p className="text-sm">
          Core Collection available now | Get free shipping on orders over $200
          &nbsp; &nbsp; &nbsp; &nbsp; Core Collection available now | Get free
          shipping on orders over $200 &nbsp; &nbsp; &nbsp; &nbsp; Core Collection available now | Get free
          shipping on orders over $200
        </p>
      </div>
    </div>
  );
};

export default NotificationBar;
