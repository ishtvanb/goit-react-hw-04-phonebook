import styled from "@emotion/styled";
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  background-color: lightblue;

  margin-bottom: 20px;
  padding: 20px;
  box-shadow: rgba(70, 70, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 7px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const FormLabel = styled.label`
margin-bottom: 10px;
`;

export const Cover = styled.div`
position: relative;
`;

export const Input = styled.input`
  height: 30px;
  width: 88%;
  padding-left: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 7px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  background-color: limegreen;
`;
