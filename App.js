import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EasyToast from 'react-native-easy-toast';

import Home from './src/screens/home';
import Toast from './src/components/Toast';

import { AuthContext } from './src/store/context';
import { SignIn } from './src/screens/auth';
import { SAVED_KEY } from './src/constants';
import { initialState, reducer } from './src/store/reducer';
import { token } from './src/utils';
import Splash from './src/components/splash';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [restored, setRestored] = React.useState(false);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let savedUser;
      try {
        savedUser = await SecureStore.getItemAsync(SAVED_KEY);
      } catch (e) {}

      if (savedUser) {
        savedUser = JSON.parse(savedUser);
        dispatch({ type: 'RESTORE_TOKEN', token: savedUser.token, id: savedUser.id });
      }
      setRestored(true);
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        const dummyToken = token();
        const action = { token: dummyToken, id: data.id };
        await SecureStore.setItemAsync(SAVED_KEY, JSON.stringify(action));
        dispatch({ type: 'SIGN_IN', ...action });
      },
      signOut: () => {
        SecureStore.deleteItemAsync(SAVED_KEY);
        dispatch({ type: 'SIGN_OUT' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ loggedId: state.id, authContext }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!restored ? (
            <Stack.Screen name="Splash" component={Splash} />
          ) : state && state.token !== null ? (
            <Stack.Screen name="SignIn" component={SignIn} />
          ) : (
            <Stack.Screen name="Home" component={Home} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <EasyToast
        ref={(ref) => Toast.setToast(ref)}
        style={styles.toast}
        position="bottom"
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={styles.toastText}
      />
      <EasyToast
        ref={(ref) => Toast.setToastError(ref)}
        style={[styles.toast, styles.toastError]}
        position="bottom"
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={styles.toastText}
      />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  toast: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  toastError: {
    backgroundColor: 'red',
  },
  toastText: {
    fontSize: 16,
    color: 'white',
  },
});
