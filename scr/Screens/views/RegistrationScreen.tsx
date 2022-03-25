import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useAppSelector } from '../../AppState/hooks';
import { AuthModel } from '../../Core/Services/AuthService/models/AuthModelBase';
import { colorScheme, margins } from '../../Shared/styleSchemes/constants';
import { IRegistrationScreen } from '../models/IRegistrationScreen';

export const RegistrationScreen: React.FC<IRegistrationScreen> = ({ deps }) => {
    const { authService } = deps;
    const [login, setLogin] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [appPasscode, setAppPasscode] = React.useState<string>();
    const { authState } = useAppSelector((state) => state.app)

    async function onApplyLoginData(email: string, password: string, passcode: string) {
        const data = new AuthModel(email, password, passcode);
        await authService.applyRegistrationModel(data);
    };

    return (
        <View style={style.container} >
            <Text style={style.text}>Login screen</Text>
            <Text style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                value={login}
                onChangeText={(text) => setLogin(text)}
            />
            <Text style={style.text}>Password</Text>
            <TextInput
                style={style.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Text style={style.text}>App passcode</Text>
            <TextInput
                style={style.input}
                value={appPasscode}
                onChangeText={(text) => setAppPasscode(text)}
            />
            <Button title='apply'
                onPress={async () => {
                    await onApplyLoginData(login, password, appPasscode)
                }}
            />
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});