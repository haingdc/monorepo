import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import { Button } from "../../components/button"
import authenPic from '../../../assets/authenPic.png'
import mail from '../../../assets/mail.png'
import lock from '../../../assets/lock.png'
import { AuthContext } from '../../contexts/auth'
import { InputApp } from '../../components/input'

export function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  const [ password, setPassword] = useState('canden')
  const [ address , setAddress ] = useState('kiran123@gmail.com')
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={styles.slidePhoto1} source={authenPic} />
      <View style={{ height: 95 }} />
      <View style={styles.wrapper}>
        <InputApp
          avatar={mail}
          type="emailAddress"
          style={styles.intput}
          value={address}
          onChangeText={setAddress}
          imageStyle={{ width: 17.69, height: 12.08 }}
        />
        <InputApp
          type="password"
          avatar={lock}
          style={styles.intput2}
          value={password}
          onChangeText={setPassword}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Text style={styles.description}>
          Don&apos;t have account?
          <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}> Register </Text>
          here.
        </Text>
      </View>
      <Button onPress={() => signIn({ address, password })}>Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  slideTitle1: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    marginTop: 81,
    marginBottom: 20,
  },
  wrapper: {
    marginTop: 30,
  },
  description: {
    color: '#333333',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 41,
  },
  link: {
    color: '#1D3AF2',
    textDecorationLine: 'underline',
    fontWeight: 'normal',
  },
  slidePhoto1: {
    width: 219,
    height: 169,
  },
  intput: {
    width: 335,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.5)',
    borderStyle: 'solid',
    shadowColor: 'rgba(56,56,56,0.75)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 4,
  },
  intput2: {
    width: 335,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.5)',
    borderStyle: 'solid',
    shadowColor: 'rgba(56,56,56,0.75)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 4,
  },
  forgot: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 15,
    textAlign: 'right',
    marginTop: 8,
    marginBottom: 38,
  },
})
