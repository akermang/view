import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import HeaderComponent from "./components/header.component";
import SelectComponent from "./components/select.component";
import {WHITE, TEAL } from "./variables/variables";

const whiteTheme = {
  name: WHITE,
  backButton: { color: "#757575" },
  logo: { fill: "#1fc4f9" },
  root: { backgroundColor: "#0000" },
  card: { boxShadow: "0 2px 16px 0 rgba(198,198,198,0.5)" }
};

const tealTheme = {
  name: TEAL,
  backButton: { color: "#ffff" },
  logo: { fill: "#ffff" },
  root: { backgroundColor: "#29e2ff" },
  card: { boxShadow: "none" }
};

const styles = {
  root: {
    height: "calc(100vh - 10px)",
    border: "5px solid #dfe0e0"
  },
  rootTeal: {
    backgroundColor: "#29e2ff"
  },
  mainBody: {
    height: "calc(100vh - 94px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: 350,
    height: "62vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  "@media (max-width: 768px)": {
    mainBody: {
      alignItems: "flex-start"
    },
    card: {
      boxShadow: "none!important",
      alignItems: "flex-start"
    }
  }
};

const themeProvider = themeName => {
  switch (themeName) {
    case WHITE:
      return whiteTheme;
    case TEAL:
      return tealTheme;
    default:
      return whiteTheme;
  }
};

const App = ({ classes }) => {
  const [appTheme, setAppTheme] = useState(themeProvider(WHITE));

  const toggleTheme = () => {
    appTheme.name === WHITE
      ? setAppTheme(themeProvider(TEAL))
      : setAppTheme(themeProvider(WHITE));
  };

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: `${appTheme.root.backgroundColor}` }}
    >
      <HeaderComponent theme={appTheme} backAction={toggleTheme} />

      <div className={classes.mainBody}>
        <div
          className={classes.card}
          style={{ boxShadow: `${appTheme.card.boxShadow}` }}
        >
          <SelectComponent
            callback={themeName => setAppTheme(themeProvider(themeName))}
            themeName={appTheme.name}
          />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
