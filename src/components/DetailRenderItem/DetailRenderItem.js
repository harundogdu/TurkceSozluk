import React from 'react';
import Box from '../Box/BoxDefault';
import Text from '../Text';

const DetailRenderItem = ({ item, index }) => {
  return (
    <Box my={12} p={6}>
      <Box flexDirection="row">
        <Text fontSize={15} fontWeight="bold" color="textLight">
          {index + 1}
        </Text>
        <Text ml={10} color="red" fontWeight="bold" fontSize={15}>
          İsim
        </Text>
      </Box>
      <Box my={6} px={8}>
        <Text fontSize={16} color="textDark" fontWeight={600}>
          {item.title}
        </Text>
      </Box>
      <Box px={12}>
        <Text color="textLight" fontWeight={500}>
          {item.text}
        </Text>
      </Box>
    </Box>
  );
};

export default DetailRenderItem;
