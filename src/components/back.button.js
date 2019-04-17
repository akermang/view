import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import BcackSvg from "../assets/back.svg";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  backButton: {
    position: "absolute",
    top: 10,
    left: 32,
    fontSize: 19,
    "&:hover": {
      cursor: "pointer"
    }
  },
  btnLabel: {
    display: "inline"
  },
  "@media (max-width: 768px)": {
    btnLabel: {
      display: "none"
    }
  }
};

const BackButton = ({ classes, theme, backAction }) => {
  return (
    <div
      className={classes.backButton}
      style={{ color: theme.color }}
      onClick={backAction}
    >
      <ReactSVG src={BcackSvg} svgStyle={{ fill: theme.color }} wrapper="span" />
      <span className={classes.btnLabel}>Back</span>
    </div>
  );
};

BackButton.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  backAction: PropTypes.func.isRequired
};

BackButton.defaultProps = {
  theme: { color: "#757575" }
};

export default withStyles(styles)(BackButton);
