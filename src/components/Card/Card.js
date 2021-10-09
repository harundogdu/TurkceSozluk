import React from 'react';
import Box from '../Box/BoxDefault';
import Button from '../Button';
import Text from '../Text';

export function Card({ children, ...props }) {
  return (
    <Button px={16} py={12} bg="white" borderRadius="normal" {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
}

export function CardTitle({ children }) {
  return (
    <Text color="textDark" fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
}

export function CardSummary({ children }) {
  return (
    <Text color="textMedium" fontSize={14} mt={8}>
      {children}
    </Text>
  );
}

export default Card;
