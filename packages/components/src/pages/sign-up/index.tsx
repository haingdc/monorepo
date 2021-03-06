import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Button      } from "../../components/button";
import { AuthContext } from '../../contexts/auth';
import   authenPic     from '../../../assets/authenPic.png';
import   human         from '../../../assets/human.png';
import   mail          from '../../../assets/mail.png';
import   lock          from '../../../assets/lock.png';
import   RadioButton   from '../../components/input-radio';
import   useToggle     from '../../hooks/useToggle';

export function SignUp(props) {
  const { signUp     } = React.useContext(AuthContext);
  const { navigation } = props;
  const [account , setAccount ] = useState('Kiran');
  const [password, setPassword] = useState('canden');
  const [address , setAddress ] = useState('kiran123@gmail.com');
  const [accept , toggleAccept] = useToggle(false);
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
        <InputApp
          avatar={human}
          type="username"
          style={styles.intput}
          imageStyle={{ width: 15.83, height: 16.22 }}
          value={account}
          onChangeText={setAccount}
        />
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
          style={styles.intput}
          value={password}
          onChangeText={setPassword}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <View style={styles.ratioWrapper}>
          <RadioButton
            button={{
              color: '#EE5D62',
              size: 20,
              selected: accept,
            }}
            onClick={toggleAccept}
          />
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.description}>
              I hereby agree to the
              <Text style={styles.descriptionBold}> T&C and Privacy Policy.</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.description2}>
          Already a member?
          <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}> Login </Text>
          here.
        </Text>
      </View>
      <Button onPress={() => signUp({ address, password, account })}>Register</Button>
    </View>
  )
}

function InputApp(props: {
  style: Record<string, unknown>
  avatar: ImageSourcePropType
  imageStyle: { width: number; height: number }
  value: string
  type: 'password' | 'username' | 'emailAddress'
  onChangeText: ((text: string) => void) | undefined
}) {
  const { style, avatar, type, imageStyle, value, onChangeText } = props
  return (
    <View style={style}>
      <View style={{ padding: 17 }}>
        <Image source={avatar} style={imageStyle} />
      </View>
      <TextInput
        value={value}
        textContentType={type}
        onChangeText={onChangeText}
        secureTextEntry={type === 'password'}
        style={{ flex: 1, height: 40, borderWidth: 0 }}
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
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'normal',
  },
  description2: {
    color: '#333333',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 41,
  },
  descriptionBold: {
    fontWeight: '900',
    textDecorationLine: 'underline',
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
  ratioWrapper: {
    flexDirection: 'row',
    marginBottom: 23,
  },
})
