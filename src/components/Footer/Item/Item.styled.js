import styled from "styled-components";

export const StyledItem = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 32px;
  margin-bottom: 32px;
  cursor: pointer;
  font: 200 18px Overpass, sans-serif;
  h2 {
    font: 600 18px Overpass, sans-serif;
  }
`;
export const StyledSubItem = styled.li`
  text-align: center;
  padding-bottom: 16px;
  cursor: pointer;
`;
