import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "../Screens/views/MainScreen";
import type { INavigationBaseProps } from '../Core/models/INavigationBaseProps';
import { routeNames } from './constants';

const Tabs = createBottomTabNavigator();

interface ITabNavigaor extends INavigationBaseProps { };

export const TabNavigator = ({ deps }: ITabNavigaor) => {
    return (
        <Tabs.Navigator
            initialRouteName={routeNames.mainTab}>
            <Tabs.Screen name={routeNames.mainTab} >
                {() => <MainScreen deps={deps} />}
            </Tabs.Screen>
        </Tabs.Navigator>
    );
};