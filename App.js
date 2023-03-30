import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Menu from './src/Menu';
import BookDetail from './src/screens/Literature/BookDetail';
import Literature from './src/screens/Literature/Literature';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Menu} />
        {/* Screens */}
        <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* <Menu /> */}
    </NavigationContainer>
  );
}
