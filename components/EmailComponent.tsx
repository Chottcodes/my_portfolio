"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

const EmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("cwellshott@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center">
      <a
        href="mailto:cwellshott@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Chris%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20about%20a%20project.%0D%0A%0D%0ABest%2C"
        rel="noopener noreferrer"
        aria-label="Email Me"
        onClick={(e) => {
     
          if (!window.navigator.userAgent.includes("Mac") && !window.navigator.userAgent.includes("Windows")) {
            e.preventDefault();
            copyEmail();
          }
        }}
      >
        <Mail className="text-[#EAE3C9] w-6 h-6 hover:text-blue-500 cursor-pointer" />
      </a>
      {copied && (
        <span className="absolute bottom-[-20px] text-xs text-green-400">
          Email copied to clipboard!
        </span>
      )}
    </div>
  );
};

export default EmailButton;
