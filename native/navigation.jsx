import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signup from './app/signup';
import index from './app';
import username from './app/username';
import HomeScreen from './screens/HomeScreen';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
const Stack = createNativeStackNavigator();


export default function Navigation() {
    const [isLoading, setIsLoading] = React.useState(true);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      restoreState();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  <NavigationContainer
  initialState={initialState}
  onStateChange={(state) =>
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
  }
>
  <Stack.Navigator>
    <Stack.Screen name="index" component={index} />
    <Stack.Screen name="signup" component={signup} />
    <Stack.Screen name="username" component={username} />
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
  </Stack.Navigator>
</NavigationContainer>
}