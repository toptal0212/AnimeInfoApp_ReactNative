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