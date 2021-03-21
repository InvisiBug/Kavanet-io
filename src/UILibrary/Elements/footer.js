import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-r from-blue-500  to-green-500 pl-10 pr-10 text-primary">
        <div className="flex justify-between items-center">
          <p>Hello from footer</p>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            className="h-10"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
