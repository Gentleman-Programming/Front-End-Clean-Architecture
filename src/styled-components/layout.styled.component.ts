import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  padding-right: 20px;
  border-radius: 4px;
  max-width: 1440px;
  padding: 4rem;
`;

export const Heading = styled.div`
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;
  color: #212529;
  margin: 0;
  border-radius: 4px;
  padding: 20px 0 20px 20px;
  max-height: 85px;
`;

export const MainContainer = styled.div`
  background-color: white;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 20px 20px;
  border-radius: 4px;
  min-width: 794px;
  height: 100%;
`;

export const AppContainer = styled.div`
  justify-content: center;
  background-color: #f4f5ff;
  display: flex;
`;
