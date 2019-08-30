import React, { useContext, useState, useEffect } from 'react';
import {
  Animated, FlatList,
} from 'react-native';

import AppContext from 'app/src/contexts/AppContext';
import Thread from 'app/src/components/Thread';

const Threads = () => {
  const { store } = useContext(AppContext);
  const [opacity] = useState(new Animated.Value(1));

  const animate = () => {
    Animated.timing(
      opacity, { toValue: 1, duration: 1000 },
    ).start();
  };

  useEffect(() => { animate(); });

  return (
    <Animated.View style={{ opacity }}>
      <FlatList
        data={store.getState().threads}
        renderItem={({ item }) => (
          <Thread thread={item} />
        )}
      />
    </Animated.View>
  );
};

export default Threads;
