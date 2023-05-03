import styled from "@emotion/styled";

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  padding: 10px;
  background-color: lightblue;
  
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

&:hover {
  background-color: darkgrey;
  }
`;

