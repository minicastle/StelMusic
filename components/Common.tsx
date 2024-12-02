import styled from "@emotion/native";
export const CommonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
`;
export const CommonText = styled.Text<{ size?: number; weight?: string }>`
  color: white;
  font-size: ${(props) => props.size + "px"};
  font-weight: ${(props) => props.weight};
  font-family: "Bentham";
`;
