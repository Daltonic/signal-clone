import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from './components/CustomListItem'
import { getAuth, signOut } from '../firebase'

const HomeScreen = ({ navigation }) => {
  const auth = getAuth()
  const signOutUser = () => {
    signOut(auth).then(() => navigation.replace('Login'))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
