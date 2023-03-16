import React from 'react';
import {View ,Text,Button,Alert,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import InputScreen from './screens/inputScreen';
import LastPage from './screens/LastPage';
import LastScreen from "./screens/LastScreen"

const Stack = createNativeStackNavigator();
const App = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name="Home" component={HomeScreens} options={{title:"Home"}}/>
        <Stack.Screen name="Details" component={InputScreen} />
        <Stack.Screen name="Last" component={LastPage} options={{title:"Last"}}/>
        <Stack.Screen name='Lasttt' component={LastScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )


export default App;