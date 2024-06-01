// Desc: Social links component

import React from "react";
import { socialLinks } from "../constants";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name === "GitHub" && (
            <FaGithub className="icon github-icon" color="white" />
          )}
          {link.name === "LinkedIn" && (
            <FaLinkedinIn
              className="icon linkedin-icon"
              color="white"
              style={{ backgroundColor: "#0e76a8" }}
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
