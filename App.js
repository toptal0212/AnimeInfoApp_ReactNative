// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';


import HomeSceen from './src/screen/HomePage';
import SerachResult from './src/screen/SerachResult';
import Details from './src/screen/ShowDetail';
import SearchBar from './src/screen/component/searchBar';
import SerachResultGenre from './src/screen/SearchResultGenre';

const navigator = createStackNavigator(
  {
    Home: HomeSceen,
    SerachResult:SerachResult,
    SearchBar:SearchBar,
    Details:Details,
    Details2:Details, //from Genre search
    SerachResultGenre:SerachResultGenre,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Anime/Manga Info Finder',
    },
  }
);

export default createAppContainer(navigator);