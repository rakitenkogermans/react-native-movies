import {Home} from './src/views/Home/Home.tsx';
import {Genre} from './src/views/Genre/Genre.tsx';
import {Movie} from './src/views/Movie/Movie.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList, UserStackParamList} from './src/@types/Stacks';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ColorConstants, FontConstants} from './src/constants/StyleConstants.ts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {User} from './src/views/User/User.tsx';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UserProvider} from './src/context/UserContext.tsx';

const TabNavigator = createBottomTabNavigator();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const UserStack = createNativeStackNavigator<UserStackParamList>();

const MovieTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: ColorConstants.background,
    card: ColorConstants.background,
  },
};

const MainStackScreen = () => {
  return (
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
  );
};

const UserStackScreen = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorConstants.background,
        },
        headerTintColor: ColorConstants.font,
        headerTitleStyle: {
          fontWeight: FontConstants.weightBold,
        },
      }}>
      <UserStack.Screen
        name="User"
        component={User}
        options={{title: 'Favorite Movies'}}
      />
      <UserStack.Screen
        name="Movie"
        component={Movie}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </UserStack.Navigator>
  );
};

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer theme={MovieTheme}>
        <TabNavigator.Navigator
          screenOptions={{
            tabBarInactiveBackgroundColor: ColorConstants.background,
            tabBarActiveBackgroundColor: ColorConstants.background,
            tabBarInactiveTintColor: ColorConstants.font,
          }}>
          <TabNavigator.Screen
            name="Main"
            component={MainStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icon name="home" size={20} color="#070f49" />,
            }}
          />
          <TabNavigator.Screen
            name="User"
            component={UserStackScreen}
            options={{
              headerStyle: {
                backgroundColor: ColorConstants.background,
              },
              headerTintColor: ColorConstants.font,
              headerTitleStyle: {
                fontWeight: FontConstants.weightBold,
              },
              tabBarIcon: () => <Icon name="user" size={20} color="#070f49" />,
            }}
          />
        </TabNavigator.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
