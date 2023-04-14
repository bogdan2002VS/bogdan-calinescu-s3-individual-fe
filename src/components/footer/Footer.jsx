import React from "react";
import FooterStyle, { Logos, TextStyle } from "./Footer.styled";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <FooterStyle>
      <TextStyle>
        <p>&#169; 2023. All rights reserved.</p>
      </TextStyle>
      <Logos>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
      </Logos>
    </FooterStyle>
  );
};

export default Footer;
