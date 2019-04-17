import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import logo from "../assets/logo.svg";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  logo: {
    width: 130,
    height: 33
  }
};

const logoSvg = ({ classes, theme }) => {
  return (
    <div className={"logo-component"}>
      <ReactSVG
        src={logo}
        svgClassName={classes.logo}
        svgStyle={theme}
        wrapper="span"
      />
    </div>
  );
};

logoSvg.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

logoSvg.defaultProps = {
  theme: { fill: "#1fc4f9" }
};

export default withStyles(styles)(logoSvg);
