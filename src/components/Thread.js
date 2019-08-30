import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native';
import Constants from 'expo-constants';

const Thread = ({ thread }) => {
  const { width } = Dimensions.get('window');
  const [fontSize] = useState(new Animated.Value(0));
  const fontLate = fontSize.interpolate({ inputRange: [0, 1], outputRange: [0, 12] });

  const animate = () => {
    Animated.spring(
      fontSize, { toValue: 1, friction: 1 },
    ).start();
  };

  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem(data.key, JSON.stringify(data), null);
    } catch (e) {
      await console.warn(e);
    }
  };

  useEffect(() => { animate(); });

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
    }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{ uri: thread.data.thumbnail }}
      />
      <View
        style={{ width: width - 50 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Animated.Text style={{ fontSize: fontLate }}>{thread.data.title}</Animated.Text>
          <Text
            style={{
              color: '#ababab',
              fontSize: 10,
            }}
          >
            {thread.data.domain}
          </Text>
          <Button onPress={() => { storeData(thread); }} title="ストック" />
        </View>
      </View>
    </View>
  );
};

export default Thread;
