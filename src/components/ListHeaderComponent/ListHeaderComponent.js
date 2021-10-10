import React from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import Box from '../Box/BoxDefault';
import Button from '../Button';
import Text from '../Text';
import styles from './DetailView.style';
const ListHeaderComponent = () => {
  return (
    <Box bg="softRed">
      <Box py={8}>
        <Text fontSize={32} fontWeight="bold" color="textDark">
          Detay
        </Text>
        <Text color="textLight" mt={4}>
          Arapça kalem
        </Text>
      </Box>
      <Box flexDirection="row" py={8}>
        <Button style={styles.shadow} bg="white" borderRadius="full" p={10}>
          <Icon name="volume-high" size={28} color="red" />
        </Button>
        <Button
          style={styles.shadow}
          bg="white"
          borderRadius="full"
          p={10}
          ml={12}>
          <Icon name="bookmark-outline" size={28} />
        </Button>
        <Button
          style={styles.shadow}
          ml="auto"
          bg="white"
          borderRadius="full"
          py={5}
          px={15}>
          <Icon name="cursor-pointer" size={28} />
          <Text color="textLight" fontWeight="bold" ml={8}>
            Türk İşaret Dili
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ListHeaderComponent;
