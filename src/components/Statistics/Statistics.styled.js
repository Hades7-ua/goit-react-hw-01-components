import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StatisticsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatisticsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #171919;
`;
