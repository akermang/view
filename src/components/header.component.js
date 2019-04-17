import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BackButton from "./back.button";
import Logo from "./logo";

const styles = {
  headerRoot: {
    minHeight: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontSize: "calc(10px + 2vmin)"
  },
  "@media (max-width: 768px)": {
    logo: { display: "none" },
    headerRoot: {
      minHeight: 35
    }
  }
};

const HeaderComponent = ({ classes, theme, backAction }) => {
  return (
    <div className={classes.headerRoot}>
      <BackButton backAction={() => backAction()} theme={theme.backButton} />
      <span className={classes.logo}>
        <Logo theme={theme.logo} />
      </span>
    </div>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  backAction: PropTypes.func.isRequired
};

HeaderComponent.defaultProps = {
  theme: {
    backButton: { color: "#757575" },
    logo: { fill: "#1fc4f9" }
  }
};

export default withStyles(styles)(HeaderComponent);
