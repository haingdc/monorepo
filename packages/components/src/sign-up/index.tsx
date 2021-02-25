import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageSourcePropType,
} from 'react-native'
import { AppButton } from '../home/home'
import authenPic from '../../assets/authenPic.png'
import human from '../../assets/human.png'
import mail from '../../assets/mail.png'
import lock from '../../assets/lock.png'

export function SignUp() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={styles.slidePhoto1} source={authenPic} />
      <View style={styles.wrapper}>
        <UselessTextInput
          avatar={human}
          style={styles.intput}
          imageStyle={{ width: 15.83, height: 16.22 }}
        />
        <UselessTextInput
          avatar={mail}
          style={styles.intput}
          imageStyle={{ width: 17.69, height: 12.08 }}
        />
        <UselessTextInput
          avatar={lock}
          style={styles.intput}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <Text style={styles.description}>
          I hereby agree to the T&C and Privacy Policy.
        </Text>
        <Text style={styles.description}>Already a member? Login here.</Text>
      </View>
      <AppButton title="Register" onPress={() => {}} />
    </View>
  )
}

function UselessTextInput(props: {
  style: Record<string, unknown>
  avatar: ImageSourcePropType
  imageStyle: { width: number; height: number }
}) {
  const { style, avatar, imageStyle } = props
  const [value, onChangeText] = React.useState('Useless Placeholder')
  return (
    <View style={style}>
      <View style={{ padding: 17 }}>
        <Image source={avatar} style={imageStyle} />
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'red', borderWidth: 0 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
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
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'normal',
    textAlign: 'center',
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
  },
})
