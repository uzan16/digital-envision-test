import React from 'react';
import {StackActions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigationParamList} from '../interface' 
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/detail';

export const navigationRef = React.createRef<any>();

export function navigate(name: string, params: any = {}) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name: string) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.replace(name, {}));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigation = () => {
    // screenOptions={{
    //     headerTintColor: theme.colors.navBar.titleColor,
    //     headerStyle: {
    //       backgroundColor: theme.colors.navBar.bar
    //     },
    //     headerTitleStyle: {
    //       color: theme.colors.navBar.titleColor,
    //       fontSize: Typography.FONT_SIZE_18
    //     }
    //   }}
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Home'
        >
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
          />
          <Stack.Screen
            name={'Detail'}
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;
