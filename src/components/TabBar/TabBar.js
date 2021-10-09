import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../Box/BoxDefault';
function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
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
          <Box key={label} p={15} bg="white" borderRadius="full" mt={-15}>
            <Button
              key={label}
              size={56}
              bg="red"
              mb={4}
              borderRadius="full"
              onPress={onPress}
              height={56}>
              <Icon name="magnify" size={28} color="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            flex={1}
            onPress={onPress}
            height={56}>
            {label === 'History' && (
              <Icon name="backup-restore" size={28} color="gray" />
            )}
            {label === 'Favourite' && (
              <Icon name="bookmark-outline" size={28} color="gray" />
            )}
            <Box size={3} bg={isFocused ? 'red' : 'white'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: 'white' },
});

export default TabBar;
