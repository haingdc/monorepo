import React, { useImperativeHandle, useRef } from 'react';
import {
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native';


export function InnerInput(props: PropType) {
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

export interface RefInput {
  focus: () => void;
  blur: () => void;
}

export const InputApp = React.forwardRef(function Input (props: PropType, ref) {
  const inputRef = useRef<TextInput>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur : () => {
      inputRef.current?.blur();
    },
  }))
  const { style, avatar, type, imageStyle, value, placeholder = '', onChangeText, onFocus } = props;
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <View style={{ padding: 17 }}>
        <Image source={avatar} style={imageStyle} />
      </View>
      <TextInput
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        textContentType={type}
        onChangeText={onChangeText}
        secureTextEntry={type === 'password'}
        style={{ flex: 1, height: 40, borderWidth: 0 }}
        onFocus={onFocus}
      />
    </View>
  );
})

interface PropType {
  style       : Record<string, unknown>;
  avatar      : ImageSourcePropType;
  imageStyle  : { width: number; height: number; };
  value       : string;
  placeholder?: string;
  type?       : 'name' | 'password' | 'username' | 'emailAddress' | 'location';
  onChangeText: ((text: string) => void) | undefined;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}