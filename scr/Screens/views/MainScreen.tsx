import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import type { IMainScreen } from '../models/IMainScreen'

export const MainScreen: React.FC<IMainScreen> = ({ deps }) => {

    return (
        <View style={style.container} >
            <Text style={style.text}>Main</Text>
        </View >
    );

};

const style = StyleSheet.create({
    text: {
        color: 'black'
    },
    container: {

    }
});