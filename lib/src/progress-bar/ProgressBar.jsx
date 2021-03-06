import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcProgressBar = ({ label = "", overlay = true, value, showValue = false, margin }) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.progressBar}>
      <BackgroundProgressBar overlay={overlay}>
        <DXCProgressBar overlay={overlay} margin={margin}>
          <InfoProgressBar>
            <ProgressBarLabel overlay={overlay}>{label}</ProgressBarLabel>
            <ProgressBarProgress overlay={overlay} showValue={showValue}>
              {value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100} %
            </ProgressBarProgress>
          </InfoProgressBar>
          <LinearProgress
            variant={showValue ? "determinate" : "indeterminate"}
            value={value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}
          />
        </DXCProgressBar>
      </BackgroundProgressBar>
    </ThemeProvider>
  );
};

DxcProgressBar.propTypes = {
  label: PropTypes.string,
  overlay: PropTypes.bool,
  value: PropTypes.number,
  showValue: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

const BackgroundProgressBar = styled.div`
  background-color: ${(props) =>
    props.overlay === true ? `${props.theme.overlayColor}${props.theme.overlayOpacity}` : "transparent"};
  width: ${(props) => (props.overlay === true ? "100%" : "")};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.overlay === true ? "center" : "")};
  height: ${(props) => (props.overlay === true ? "100vh" : "")};
  align-items: ${(props) => (props.overlay === true ? "center" : "")};
  min-width: 685px;
  max-width: ${(props) => (props.overlay === true ? "100%" : "")};
  position: ${(props) => (props.overlay === true ? "fixed" : "")};
  top: ${(props) => (props.overlay === true ? "0" : "")};
  bottom: ${(props) => (props.overlay === true ? "0" : "")};
  left: ${(props) => (props.overlay === true ? "0" : "")};
  right: ${(props) => (props.overlay === true ? "0" : "")};
  font-family: "Open Sans", sans-serif;
`;

const DXCProgressBar = styled.div`
  z-index: ${(props) => (props.overlay === true && "100") || "0"};
  width: ${(props) => (props.overlay === true ? "80%" : "100%")};
  .MuiLinearProgress-root {
    height: 9px;
    background-color: ${(props) => `${props.theme.totalLine}${props.theme.totalLineOpacity}`};
    border-radius: 5px;
  }
  .MuiLinearProgress-bar {
    background-color: ${(props) => props.theme.trackLine};
  }
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
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
  color: ${(props) => (props.overlay === true ? "#FFFFFF" : props.theme.fontColor)};
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

const ProgressBarProgress = styled.div`
  font-size: 12px;
  color: ${(props) => (props.overlay === true ? "#FFFFFF" : props.theme.fontColor)};
  display: ${(props) => (props.value !== "" && props.showValue === true && "block") || "none"};
  width: 5%;
  text-align: right;
  margin-bottom: 8px;
`;

export default DxcProgressBar;
