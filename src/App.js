import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/* pages */
import FavouriteView from './views/favourite';
import HistoryView from './views/history';
import SearchView from './views/search';
import DetailView from './views/detail';
/* theme */
import theme from './utils/theme';
/* components */
import TabBar from './components/TabBar';
/* stack */
const HomeStack = createNativeStackNavigator();
/* Tab */
const Tab = createBottomTabNavigator();
/* Search function */
const SearchStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
};
/* App function */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="SearchStack"
            screenOptions={{ headerShown: false }}
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="SearchStack" component={SearchStack} />
            <Tab.Screen name="Favourite" component={FavouriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
