import React from 'react';
/* components */
import Box from '../../components/Box/BoxDefault';
import Text from '../../components/Text';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';

const DetailView = () => {
  return (
    <Box bg="softRed" flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>DetailView</Text>
    </Box>
  );
};

export default DetailView;
