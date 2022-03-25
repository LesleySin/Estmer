import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from '../Screens/views/RegistrationScreen';
import { TabNavigator } from './TabNavigator';

import type { INavigationBaseProps } from '../Core/models/INavigationBaseProps';
import { routeNames } from './constants';
import { ActivityIndicator, View, Text } from 'react-native';
import { useAppSelector } from '../AppState/hooks';
import { AppPasscodePage } from '../Screens/views/AppPasscodePage';

const Stack = createStackNavigator();

interface IRootNavigator extends INavigationBaseProps { };

export const RootNavigator = ({ deps }: IRootNavigator) => {
    const { authService } = deps;
    const { isSingedIn, authState } = useAppSelector((state) => state.app)

    React.useEffect(() => {
        async function test() {
            await authService.prepareAuthWorkflow()
        }
        test()
    }, [])

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            {
                authState === 'Register Required'
                    ? (<>
                        <Stack.Screen name={routeNames.login}>
                            {() => <RegistrationScreen deps={deps} />}
                        </Stack.Screen>
                    </>)
                    : authState === 'Enter app passcode'
                        ? (
                            <>
                                <Stack.Screen name='Enter' >
                                    {() => <AppPasscodePage deps={deps} />}
                                </Stack.Screen>
                            </>
                        )
                        : authState === 'Allow enter'
                            ? (
                                <>
                                    <Stack.Screen name={routeNames.mainWindow}  >
                                        {() => <TabNavigator deps={deps} />}
                                    </Stack.Screen>
                                </>
                            )
                            : (
                                <>
                                    <Stack.Screen name='none' >
                                        {() => <ActivityIndicator color={'black'} size={80} animating={true} />}
                                    </Stack.Screen>
                                </>
                            )
            }
        </Stack.Navigator>
    );
};
