import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favourite" component={FavouriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
