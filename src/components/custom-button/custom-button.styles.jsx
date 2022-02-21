import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 40px;
  max-height: 60px;
  letter-spacing: 0.5px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Steppe', sans-serif;
  cursor: pointer;  
  margin:  10px auto;

  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darkgrey;
    box-shadow: 0 0 5px white;
  }
`