import React from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../Box/BoxDefault';
function TabBar({ state, descriptors, navigation }) {
  const [keyboardStatus, setKeyboardStatus] = React.useState(true);
  React.useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardStatus(true),
    );
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardStatus(false),
    );
    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);
  if (!keyboardStatus) {
    return (
      <Box style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return label === 'SearchStack' ? (
            /* Search Button */
            <Box key={label} p={15} bg="white" borderRadius="full" mt={-15}>
              <Button
                size={56}
                bg="red"
                borderRadius="full"
                onPress={onPress}
                height={56}>
                <Icon name="magnify" size={28} color="white" />
              </Button>
            </Box>
          ) : (
            /* other Bottom Buttons */
            <Button
              key={label}
              pt={6}
              flexDirection="column"
              flex={1}
              onPress={onPress}
              height={56}>
              {/* History Button */}
              {label === 'History' && (
                <Icon
                  name="backup-restore"
                  size={28}
                  color={isFocused ? 'red' : 'gray'}
                />
              )}
              {/* Favourite Button */}
              {label === 'Favourite' && (
                <Icon
                  name="bookmark-outline"
                  size={28}
                  color={isFocused ? 'red' : 'gray'}
                />
              )}
              {/* indicator */}
              <Box
                borderRadius="full"
                size={3}
                bg={isFocused ? 'red' : 'white'}
                mt={6}
              />
            </Button>
          );
        })}
      </Box>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
});

export default TabBar;
