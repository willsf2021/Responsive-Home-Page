import styled from "styled-components";

export const StyledItem = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 32px;
  margin-bottom: 32px;
  list-style: none;
  cursor: pointer;
  font: 200 18px Overpass, sans-serif;
  h2 {
    font: 600 18px Overpass, sans-serif;
  }
@media (min-width: 768px) {
  text-align: left;
}
`;
export const StyledSubItem = styled.li`
  text-align: center;
  padding-bottom: 16px;
  cursor: pointer;
  list-style: none;
  @media (min-width: 768px) {
    text-align: left;
    
  }

`;
