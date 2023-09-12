import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Description = styled.div`
  flex: 1;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #777;
  margin: 0;
  text-align: center;
`;

export const Location = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-top: 20px;
`;

export const StatItem = styled.li`
  margin-right: 20px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: #333;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`;
