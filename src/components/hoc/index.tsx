import React, { ReactNode } from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet
} from 'react-native';

interface Props {
  children: ReactNode;
}

const Hoc = ({children}: Props) => {
  return (
    <>
      <StatusBar
        translucent={true}
      />
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FE'
  }
});

export default Hoc;
