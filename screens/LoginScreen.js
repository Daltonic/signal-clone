import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light" />
            <Text>I'm the login screen!</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
