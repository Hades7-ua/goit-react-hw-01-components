import {
  List,
  Title,
  StatisticsInfo,
  StatisticsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const StatisticsList = ({ stats, title }) => {
  return (
    <List>
      {title && <Title>{title}</Title>}
      <StatisticsInfo>
        {' '}
        {stats.map(el => (
          <StatisticsItem key={el.id}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsInfo>
    </List>
  );
};
