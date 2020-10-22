import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default class ProfileScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
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