import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
/* pages */
import FavouriteView from './views/favourite';
import HistoryView from './views/history';
import SearchView from './views/search';
import DetailView from './views/detail';
/* stack */
const HomeStack = createNativeStackNavigator();
/* Tab */
const Tab = createBottomTabNavigator();
/* Search function */
const SearchStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
};
/* App function */
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'History') {
              iconName = 'backup-restore';
            } else if (route.name === 'Search') {
              iconName = 'magnify';
            } else if (route.name === 'Favourite') {
              iconName = 'bookmark-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favourite" component={FavouriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
