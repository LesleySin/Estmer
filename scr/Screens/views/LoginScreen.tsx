import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { routeNames } from '../../Navigation/constants';
import { colorScheme, margins } from '../../Shared/styleSchemes/constants';


export const LoginScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={style.container} >
            <Text style={style.text}>Login screen</Text>
            <Button title='go to main' onPress={() => {
                navigation.navigate(routeNames.mainWindow);
            }} />
        </View >
    );

};

const style = StyleSheet.create({
    text: {
        margin: margins.smallMargin,
        color: colorScheme.secondary
    },
    container: {
        marginBottom: 150
    }
});