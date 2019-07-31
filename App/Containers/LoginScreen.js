import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Text>{'login Screen'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}