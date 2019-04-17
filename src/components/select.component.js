import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

const SelectComponent = props => {
  const { callback, classes, themeName } = props;
  const handleChange = event => {
    callback(event.target.value);
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select value={themeName} onChange={handleChange}>
          <MenuItem value={"white"}>White</MenuItem>
          <MenuItem value={"teal"}>Teal</MenuItem>
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
