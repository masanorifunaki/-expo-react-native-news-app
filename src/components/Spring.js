import React, { useState, useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';

const Spring = () => {
  const [degree, setDegree] = useState(new Animated.Value(0));

  let animated = () => {
    Animated.timing(degree, { toValue: 1, duration: 4000, easing: Easing.linear }).start(() => {
      setDegree(new Animated.Value(0));
      animated();
    });
  };

  const rotate = degree.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    animated();
    return () => {
      animated = () => false;
    };
  }, []);

  return (
    <View>
      <Animated.Image
        source={require('app/assets/images/cat.png')}
        style={{ transform: [{ rotate }], width: 100, height: 100 }}
      />
    </View>
  );
};

export default Spring;
