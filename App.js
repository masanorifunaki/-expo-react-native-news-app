import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  Animated,
} from 'react-native';

import Spring from 'app/src/components/Spring';

const App = () => {
  const [threads, setThreads] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [opacity] = useState(new Animated.Value(0));
  const [fontSize] = useState(new Animated.Value(0));
  const { width } = Dimensions.get('window');
  const fontLate = fontSize.interpolate({ inputRange: [0, 1], outputRange: [0, 12] });

  const animate = () => {
    Animated.timing(
      opacity, { toValue: 1, duration: 1000 },
    ).start();
    Animated.spring(
      fontSize, { toValue: 1, friction: 1 },
    ).start();
  };

  useEffect(() => {
    fetch('https://www.reddit.com/r/newsokur/hot.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let newThreads = responseJson.data.children;
        newThreads = newThreads.map((i) => {
          // eslint-disable-next-line no-param-reassign
          i.key = `${i.data.url}${Math.random() * 10}`;
          return i;
        });
        setThreads(newThreads);
        setLoading(false);
        animate();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
    >
      {isLoading
        ? <Spring />
        : (
          <Animated.View style={{ opacity }}>
            <FlatList
              data={threads}
              renderItem={({ item }) => (
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
                    source={{ uri: item.data.thumbnail }}
                  />
                  <View
                    style={{ width: width - 50 }}
                  >
                    <View
                      style={{ flex: 1, flexDirection: 'column' }}
                    >
                      <Animated.Text style={{ fontSize: fontLate }}>{item.data.title}</Animated.Text>
                      <Text
                        style={{ color: '#ababab', fontSize: 10 }}
                      >
                        {item.data.domain}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </Animated.View>
        )}
    </View>
  );
};

export default App;
