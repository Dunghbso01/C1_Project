import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default class NotificationScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>NotificationScreen</Text>
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