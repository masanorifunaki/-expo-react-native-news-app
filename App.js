import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [threads, setThreads] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { width } = Dimensions.get('window');

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
        ? <ActivityIndicator />
        : (
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
                    <Text>{item.data.title}</Text>
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
        )}
    </View>
  );
};

export default App;
