import {Home} from './src/views/Home/Home.tsx';
import {Genre} from './src/views/Genre/Genre.tsx';
import {Movie} from './src/views/Movie/Movie.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './src/@types/Stacks';
import {NavigationContainer} from '@react-navigation/native';
import {ColorConstants, FontConstants} from './src/constants/StyleConstants.ts';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: ColorConstants.background,
          },
          headerTintColor: ColorConstants.font,
          headerTitleStyle: {
            fontWeight: FontConstants.weightBold,
          },
        }}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{title: 'Movie Genres'}}
        />
        <MainStack.Screen
          name="Genre"
          component={Genre}
          options={{title: 'Movies'}}
        />
        <MainStack.Screen
          name="Movie"
          component={Movie}
          options={({route}) => ({title: route.params.movie.title})}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
