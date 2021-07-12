import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";  
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";    
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: "auto",
    background: "transparent",
    bottom: 0,
    width: '100%',
    position: 'relative',
  },
  background: {
    bottom: 0,
    background: "linear-gradient(to top, #000000 1%, transparent 120%)",
    height: 120,
    position: 'relative',
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h5 style={{ textAlign: "center", color:"#DEDEDE"}}>
        {" "}
        FIND US AS WELL ON{" "}
      </h5>  
      <BottomNavigation className={classes.footer} showLabels>
        <BottomNavigationAction
          href="https://www.facebook.com"
          target="_blank"
          label="Facebook"
          style={{ color: "#1877F2", textDecoration: "none" }}
          icon={<FacebookIcon color="#1877F2" />}
        />
        <BottomNavigationAction
          href="https://www.instagram.com"
          target="_blank"
          label="Instagram"
          style={{ color: "#E4405F", textDecoration: "none" }}
          icon={<InstagramIcon color="#E4405F" />}
        />
        <BottomNavigationAction
          href="https://twitter.com"
          target="_blank"
          label="Twitter"
          style={{ color: "#1DA1F2", textDecoration: "none" }}
          icon={<TwitterIcon color="#1DA1F2" />}
        />
      </BottomNavigation>
    </div>
  );
}
export default Footer;
