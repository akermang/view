import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {WHITE, TEAL } from "../variables/variables";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

const SelectComponent = ({ callback, classes, themeName }) => {
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select
          value={themeName}
          onChange={e => callback(e.target.value)}
        >
          <MenuItem value={WHITE}>White</MenuItem>
          <MenuItem value={TEAL}>Teal</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

SelectComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired
};

SelectComponent.defaultProps = {
  themeName: "view"
};

export default withStyles(styles)(SelectComponent);
