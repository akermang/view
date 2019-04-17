import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import Logo from "../assets/logo.svg";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  logo: {
    width: 130,
    height: 33
  }
};

const LogoSvg = ({ classes, theme }) => {
  return (
    <div className={"logo-component"}>
      <ReactSVG
        src={Logo}
        svgClassName={classes.logo}
        svgStyle={theme}
        wrapper="span"
      />
    </div>
  );
};

LogoSvg.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

LogoSvg.defaultProps = {
  theme: { fill: "#1fc4f9" }
};

export default withStyles(styles)(LogoSvg);
