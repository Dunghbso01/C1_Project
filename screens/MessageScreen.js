import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default class MessageScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>MessageScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})