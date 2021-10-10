import React from 'react';
import Box from '../Box/BoxDefault';
import Card, { CardSummary, CardTitle } from '../Card/Card';
import LoaderText from '../LoaderText/LoaderText';
import Text from '../Text';

const SuggestionCard = ({ title, data, onPress, ...props }) => {
  return (
    <Box {...props}>
      <Text mb={10}>{title}</Text>
      <Card onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <>
            <LoaderText />
            <LoaderText mt={10} />
          </>
        )}
      </Card>
    </Box>
  );
};

export default SuggestionCard;
