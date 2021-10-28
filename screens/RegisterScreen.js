import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '../firebase'

const RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imgurl, setImgurl] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back To Login',
    })
  }, [navigation])

  const register = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        const user = authUser.user
        updateProfile(user, {
          displayName: fullname,
          photoURL: imgurl,
        })
          .then(() => console.log('Profile Updated!'))
          .catch((error) => console.log(error.message))
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Fullname"
          autoFocus
          type="text"
          value={fullname}
          onChangeText={(text) => setFullname(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile ImageURL (Optional)"
          type="text"
          value={imgurl}
          onChangeText={(text) => setImgurl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        raised
        containerStyle={styles.button}
        onPress={register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  ImageDimension: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    width: 300,
    marginVertical: 10,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
})
