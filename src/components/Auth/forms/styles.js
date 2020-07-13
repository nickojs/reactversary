import styled, { css } from 'styled-components';
import openEye from '../../../assets/forms/openEye.png';
import closedEye from '../../../assets/forms/closedEye.png';

export const SmallTitle = styled.h1`
  text-align: center;
`;

export const ErrorMsg = styled.p`
  margin: 6px auto;

  font-family: 'Arial', sans-serif;
  font-size: .8em;

  color: lightcoral;
`;

export const Form = styled.form`

`;

export const Input = styled.input`
  padding: 12px;
  font-family: inherit;
  font-size: inherit;

  border: 1px solid black;
  width: 100%;
`;

export const InputDiv = styled.div`
  position: relative;
  padding: 0;
`;

const openEyeIndicator = css`
  background: url(${openEye});
`;

const closedEyeIndicator = css`
  background: url(${closedEye});
`;

export const PasswordIndicator = styled.span`
  position: absolute;
  top: calc(25% - 6px); right: 4px;

  display: block;
  width: 36px; height: 36px;
  
  border: 0;
  ${({ indicator }) => (indicator ? closedEyeIndicator : openEyeIndicator)}
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const FormInputs = styled.div`
  padding: 12px;  
`;

export const FormSubmit = styled.div` 
  align-self: center;
`;

const disabledBtn = css`
  text-decoration: line-through;
  color: grey;
`;

const enabledBtn = css`
  color: black;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
  &:disabled{ color: red; }
`;

export const ConfirmButton = styled.input`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  
  border: 0;
  color: black;
  background: transparent;
  transition: .5s ease;
  ${(props) => (props.isDisabled ? disabledBtn : enabledBtn)}
`;

export const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{ margin: 6px auto; }
`;
