import styled from "styled-components";
import dots from "../assets/dots.svg";
import arrow from "../assets/chevron-down.svg";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

export const Modal = styled.div`
  padding: 15px 20px 20px 20px;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px #0000000d;
`;

export const ModalTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  text-align: left;
  color: #a5a5a5;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    position: relative;
    background-image: url(${dots});
    width: 12px;
    height: 7px;
    margin-right: 10px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const InputOutputLabel = styled.label`
  background-color: ${(props) =>
    props.isOutputModule ? "#4CAF79" : "#E29A2D"};
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: left;
  color: #fff;
  padding: 3px 13px 3px 11px;
  border-radius: 14px;
  margin-bottom: 6px;
  width: fit-content;
  display: block;
`;

export const InputComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isOutputModule ? "row-reverse" : "row")};
  border-radius: 15px;
  width: 115px;
  height: 50px;
  border: ${(props) =>
    props.isOutputModule ? "2px solid #2DD179" : "2px solid #FFC267"};
  box-sizing: border-box;
`;
export const InputComponent = styled.input`
  width: 62%;
  border: none;
  height: 100%;
  padding: 0;
  padding-left: ${(props) => (props.isOutputModule ? "23px" : "20px")};
  border-radius: ${(props) =>
    props.isOutputModule ? "0px 15px 15px 0px" : "15px 0px 0px 15px"};
  border-right: ${(props) =>
    props.isOutputModule ? "none" : "1px solid #ffeed5"};
  border-left: ${(props) =>
    props.isOutputModule ? "1px solid #C5F2DA" : "none"};
  box-sizing: border-box;
  border-right: 1px solid #ffeed5;
  &:focus-visible {
    outline: none;
  }
`;

export const InputIcon = styled.div``;

export const DisabledSelect = styled.select``;

export const Equation = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
  text-align: left;
  color: #252525;
`;
export const EquationInput = styled.input`
  width: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 9px 0px 9px 11px;
  margin-top: 4px;
  box-sizing: border-box;
  &:focus-visible {
    outline: none;
  }
`;

export const Function = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
  text-align: left;
  color: #252525;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
`;

export const FunctionSelect = styled.select`
  width: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 9px 10px 9px 11px;
  margin-top: 4px;
  box-sizing: border-box;
  &:focus-visible {
    outline: none;
  }
  background-color: #f5f5f5;
  appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: 95%;
`;
