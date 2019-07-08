import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import DxcCheckbox from "../checkbox/Checkbox";

import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent.jsx";

const useStyles = makeStyles(() => ({
  dropdownStyle: {
    boxShadow: "0px 8px 10px 0px rgba(217,217,217,1)"
  },
  itemList: {
    color: "#666666",
    "&.MuiList-padding": {
      paddingTop: "10px",
      paddingBottom: "10px"
    },
    "& li": {
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingRight: "20px",
      paddingLeft: "20px",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "#EEEEEE",
        color: "#666"
      },
      "&:active": {
        backgroundColor: "#D9D9D9 ",
        color: "black"
      },
      "&.Mui-selected": {
        backgroundColor: "#D9D9D9 ",
        color: "black"
      }
    }
  }
}));

const DxcSelect = ({
  value,
  name,
  onChange,
  label,
  required,
  disabled,
  options,
  theme = "light",
  disableRipple = false,
  iconPosition = "after",
  multiple = false
}) => {
  const [selectedValue, setSelectedValue] = (multiple && useState([])) || useState("");
  const classes = useStyles();

  const handleSelectChange = selectedOption => {
    if (multiple) {
      setSelectedValue(selectedOption.target.value);
      onChange(selectedOption.target.value);
    } else {
      setSelectedValue(selectedOption.target.value);
      onChange(selectedOption.target.value);
    }
  };

  const labelForMultipleSelect = selected => {
    return options
      .filter(x => selected.includes(x.value))
      .map(optionToRender => optionToRender.label)
      .join(", ");
  };

  const getRenderValue = selected => {
    return (
      (multiple && labelForMultipleSelect(selected)) || options.filter(option => option.value === selected)[0].label
    );
  };
  const isChecked = (checkedValue, option) => {
    return checkedValue.findIndex(element => element === option.value) !== -1;
  };

  return (
    <SelectContainer theme={theme}>
      <LabelContainer theme={theme} disabled={disabled}>
        {required && <DxcRequired theme={theme} />}
        {label}
      </LabelContainer>
      <Select
        name={name}
        theme={theme}
        multiple={multiple}
        renderValue={getRenderValue}
        onChange={handleSelectChange}
        value={(value && value.length && value) || selectedValue}
        disabled={disabled}
        MenuProps={{
          classes: { paper: classes.dropdownStyle, list: classes.itemList }
        }}
      >
        {options.map(option => {
          return (
            <MenuItem value={option.value} disableRipple={disableRipple}>
              {multiple && <DxcCheckbox checked={isChecked(selectedValue, option)} />}
              <OptionContainer iconPosition={iconPosition}>
                {option.iconSrc && <ListIcon src={option.iconSrc} iconPosition={iconPosition} />} {option.label}
              </OptionContainer>
            </MenuItem>
          );
        })}
      </Select>
    </SelectContainer>
  );
};
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.iconPosition === "before" && "row") || "row-reverse"};
  padding-bottom: 5px;
`;

const ListIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;

const SelectContainer = styled.div`
  .MuiSelect-select {
    min-width: 230px;
    display: flex;
    color: ${props => (props.theme === "dark" ? "#fff" : "#000")};
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  }
  .MuiSelect-icon {
    color: ${props => (props.theme === "dark" ? "#fff" : "#000")};
  }
`;
const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
`;

DxcSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  disableRipple: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      iconSrc: PropTypes.string
    })
  )
};

export default DxcSelect;
