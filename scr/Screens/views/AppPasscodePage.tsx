import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { margins } from '../../Shared/styleSchemes/constants';
import type { IAppPasscodePage } from '../models/IAppPasscodePage';

export const AppPasscodePage: React.FC<IAppPasscodePage> = ({ deps }) => {
    const [passcode, setPasscode] = React.useState<string>('');
    const [attemptsCounter, setAttemptsCounter] = React.useState(0)
    const { authService, eventsService } = deps;

    React.useEffect(() => {
        eventsService.addListener(`failureCallback`, onPasscodeFailureCallback);

        return () => {
            eventsService.removeListener(`failureCallback`, onPasscodeFailureCallback);
        };
    }, []);

    React.useEffect(() => {
        if (passcode.length === 4) {
            applyPasscodeEntring(passcode);
            setPasscode('');
        };
    }, [passcode]);

    React.useEffect(() => {
        if (attemptsCounter === 3) {
            //TODO passcode auth failure handling
        }
    }, [attemptsCounter]);

    const symbolEntries = React.useMemo(() => {
        const passcodeLenght = passcode.length;
        const viewArr = new Array<JSX.Element>(4);
        for (let index = 0; index < viewArr.length; index++) {
            if (passcodeLenght === 0) {
                viewArr[index] = <View style={style.inactiveRoundIndic} />
            } else if (index <= passcodeLenght - 1) {
                viewArr[index] = <View style={style.activeRoundIndic} />
            } else {
                viewArr[index] = <View style={style.inactiveRoundIndic} />
            };
        };
        return viewArr
    }, [passcode])

    function onPasscodeFailureCallback() {
        setAttemptsCounter((state) => state += 1)
    };

    async function applyPasscodeEntring(pass: string): Promise<void> {
        await authService.handlePasscodeEntring(pass);
    };

    const roundButton = (num: number | string) => {
        let text: string;
        if (typeof num === 'number') {
            text = num.toString();
        } else {
            text = num;
        };

        return (
            <TouchableOpacity style={style.roundButton}
                onPress={() => {
                    const str = passcode + text
                    setPasscode(str)
                }}
            >
                <Text style={style.buttonText} >{text}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={style.container} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }} >
                {symbolEntries}
            </View>

            <View style={style.buttonRowContainer}>
                {roundButton(1)}
                {roundButton(2)}
                {roundButton(3)}
            </View>
            <View style={style.buttonRowContainer}>
                {roundButton(4)}
                {roundButton(5)}
                {roundButton(6)}
            </View>
            <View style={style.buttonRowContainer}>
                {roundButton(7)}
                {roundButton(8)}
                {roundButton(9)}
            </View>
            <View style={[style.buttonRowContainer, { justifyContent: 'center' }]}>
                {roundButton(0)}
            </View>
        </View >
    );

};

const style = StyleSheet.create({
    buttonText: {
        color: 'black',
        alignSelf: 'center'
    },
    container: {
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 15
    },
    buttonRowContainer: {
        flexDirection: 'row'
    },
    buttonColumnContainer: {
        flexDirection: 'column'
    },
    roundButton: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        borderRadius: 45,
        backgroundColor: '#f08a8a',
        margin: margins.exSmallMargin
    },
    activeRoundIndic: {
        height: 30,
        width: 30,
        backgroundColor: 'black',
        borderRadius: 45,
        marginLeft: 10
    },
    inactiveRoundIndic: {
        height: 30,
        width: 30,
        backgroundColor: '#DCDCDC',
        borderRadius: 45,
        marginLeft: 10
    }
});