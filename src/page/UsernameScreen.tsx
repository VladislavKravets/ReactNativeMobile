import React from 'react';
import {View} from 'react-native';
import UsernameInput from '../components/UsernameInput';

export interface UsernameScreenProps {
  onUsernameSubmit(username: string): void;
}

function UsernameScreen({onUsernameSubmit}: UsernameScreenProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
      <UsernameInput onSubmit={onUsernameSubmit} />
    </View>
  );
}

export default UsernameScreen;
