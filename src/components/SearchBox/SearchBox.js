import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../Box/BoxDefault';
import Input from '../InputBox';
import theme from '../../utils/theme';
import { Text } from 'react-native';
import Button from '../Button';
import { Keyboard } from 'react-native';
import styles from './SearchBox.style';
/* Search Box */
function SearchBox({ onChangeFocus }) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchingText, setSearchingText] = useState('');
  useEffect(() => {
    onChangeFocus(isFocus);
  }, [onChangeFocus, isFocus]);

  const onDismissKeyboard = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  return (
    <Box position="relative" flexDirection="row" alignItems="center">
      <Button
        pointerEvents="none"
        position="absolute"
        zIndex={1}
        top={14}
        left={16}>
        <Icon name="magnify" size={24} color={theme.colors.textMedium} />
      </Button>

      <Box position="relative" flex={1}>
        <Input
          clearButtonMode="always"
          style={styles.input}
          height={52}
          bg="softRed"
          color="textDark"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          borderRadius="normal"
          value={searchingText}
          onChangeText={setSearchingText}
          /* onChangeText={e => setSearchingText(e.text)} */
          onFocus={() => setIsFocus(true)}
        />
        {isFocus && searchingText.length > 0 && (
          <Button
            onPress={() => setSearchingText('')}
            pointerEvents="none"
            position="absolute"
            zIndex={1}
            top={14}
            right={16}>
            <Icon name="close" size={24} color={theme.colors.textDark} />
          </Button>
        )}
      </Box>

      {isFocus && (
        <Button onPress={onDismissKeyboard} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}

export default SearchBox;
