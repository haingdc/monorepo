import React from 'react';
import {
  View,
  TextInput,
  Image,
  ImageSourcePropType
} from 'react-native';


export function InputApp(props: PropType) {
  const { style, avatar, type, imageStyle, value, placeholder = '', onChangeText } = props;
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <View style={{ padding: 17 }}>
        <Image source={avatar} style={imageStyle} />
      </View>
      <TextInput
        value={value}
        placeholder={placeholder}
        textContentType={type}
        onChangeText={onChangeText}
        secureTextEntry={type === 'password'}
        style={{ flex: 1, height: 40, borderWidth: 0 }} />
    </View>
  );
}

interface PropType {
  style       : Record<string, unknown>;
  avatar      : ImageSourcePropType;
  imageStyle  : { width: number; height: number; };
  value       : string;
  placeholder?: string;
  type?       : 'name' | 'password' | 'username' | 'emailAddress' | 'location';
  onChangeText: ((text: string) => void) | undefined;
}