import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens/views/LoginScreen';
import { TabNavigator } from './TabNavigator';

import type { INavigationBaseProps } from '../Core/models/INavigationBaseProps';
import { routeNames } from './constants';

const Stack = createStackNavigator();

interface IRootNavigator extends INavigationBaseProps { };

export const RootNavigator = ({ deps }: IRootNavigator) => {
    return (
        <Stack.Navigator
            initialRouteName={routeNames.login}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routeNames.login}>
                {() => <LoginScreen />}
            </Stack.Screen>
            <Stack.Screen name={routeNames.mainWindow}  >
                {() => <TabNavigator deps={deps} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
