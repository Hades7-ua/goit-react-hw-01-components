import {
  TransactionHistoryContainer,
  TableHead,
  TableData,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryContainer>
  );
};
