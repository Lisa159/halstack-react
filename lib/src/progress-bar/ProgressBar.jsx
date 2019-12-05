import React from "react";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcProgressBar = ({ label = "", theme = "light", overlay = true, value, showValue = false }) => {
  return (
    <BackgroundProgressBar theme={theme} overlay={overlay}>
      <DXCProgressBar theme={theme} overlay={overlay}>
        <InfoProgressBar>
          <ProgressBarLabel theme={theme} overlay={overlay}>
            {label}
          </ProgressBarLabel>
          <ProgressBarProgress theme={theme} overlay={overlay} showValue={showValue}>
            {value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100} %
          </ProgressBarProgress>
        </InfoProgressBar>
        <LinearProgress
          variant={showValue ? "determinate" : "indeterminate"}
          value={value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}
        />
      </DXCProgressBar>
    </BackgroundProgressBar>
  );
};

DxcProgressBar.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  overlay: PropTypes.bool,
  value: PropTypes.number,
  showValue: PropTypes.bool
};

const BackgroundProgressBar = styled.div`
  background-color: ${props =>
    props.overlay === true || (props.overlay === true && props.theme === "dark")
      ? `${colors.black}B3`
      : props.theme === "dark"
      ? `${colors.black}`
      : `${colors.white}`};
  width: ${props => (props.overlay === true ? "100%" : "80%")};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.overlay === true ? "center" : "")};
  height: ${props => (props.overlay === true ? "100vh" : "")};
  align-items: ${props => (props.overlay === true ? "center" : "")};
  min-width: 685px;
  max-width: ${props => (props.overlay === true ? "100%" : "80%")};
  margin: ${props => (props.overlay === false ? "15px" : "")};
  font-family: "Open Sans", sans-serif;
`;

const DXCProgressBar = styled.div`
  margin-bottom: 12px;
  z-index: ${props => (props.overlay === true && "100") || "0"};
  width: ${props => (props.overlay === true ? "80%" : "100%")};
  .MuiLinearProgress-root {
    height: 9px;
    background-color: ${props =>
      ((props.theme === "dark" || props.overlay === true) && `${colors.white}4D`) || `${colors.black}4D`};
    margin-top: 8px;
    border-radius: 5px;
  }
  .MuiLinearProgress-bar {
    background-color: ${colors.yellow};
  }
`;

const InfoProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 685px;
  flex-wrap: wrap;
  width: 100%;
`;

const ProgressBarLabel = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  flex-grow: 1;
  color: ${props => ((props.theme === "dark" || props.overlay === true) && colors.white) || colors.black};
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProgressBarProgress = styled.div`
  font-size: 12px;
  color: ${props => ((props.theme === "dark" || props.overlay === true) && colors.white) || colors.black};
  display: ${props => (props.value !== "" && props.showValue === true && "block") || "none"};
  width: 5%;
  text-align: right;
`;

export default DxcProgressBar;