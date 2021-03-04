import React from 'react';
import {
  View,
  TextInput,
  Image,
  ImageSourcePropType
} from 'react-native';


export function InputApp(props: {
  style: Record<string, unknown>;
  avatar: ImageSourcePropType;
  imageStyle: { width: number; height: number; };
  value: string;
  type: 'password' | 'username' | 'emailAddress' | 'location';
  onChangeText: ((text: string) => void) | undefined;
}) {
  const { style, avatar, type, imageStyle, value, onChangeText } = props;
  return (
    <View style={style} nativeID="todo2">
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
        <View style={{ padding: 17 }}>
          <Image source={avatar} style={imageStyle} />
        </View>
        <TextInput
          value={value}
          textContentType={type}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password'}
          style={{ flex: 1, height: 40, borderWidth: 0 }} />
      </View>
    </View>
  );
}
