
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider} from 'react-query';
import 'react-native-gesture-handler';
import Entry from './components/extra/Entry';
import Entry2 from './components/extra/Entry2';
import Entry3 from './components/extra/Entry3';

import Home from './components/screens/Home';
import About from './components/screens/About';
import Login from './components/screens/Login';
import Register from './components/screens/Register';

import useCustomFonts from './assets/fonts/font';
const Stack = createStackNavigator();
const queryClient = new QueryClient();
const Drawer = createDrawerNavigator();


export default function App() {

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const token = "weqwe";
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName={token ? 'Register': 'Register'} >
          <Drawer.Screen name="Entry" component={Entry} options={{ headerShown: false }} />
          <Drawer.Screen name="Entry2" component={Entry2} options={{ headerShown: false }} />
          <Drawer.Screen name="Entry3" component={Entry3} options={{ headerShown: false }} />
          <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Drawer.Screen name="Register" component={Register}  options={{ headerShown: false }} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />

        </Drawer.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

