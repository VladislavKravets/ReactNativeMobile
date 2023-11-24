import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const UsernameInput: React.FC<{onSubmit: (username: string) => void}> = ({
  onSubmit,
}) => {
  const [username, setUsername] = useState('');

  const handleUsernameSubmit = () => {
    if (username.trim() === '') {
      return;
    }
    onSubmit(username);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Введіть ваше ім'я..."
      />
      <Button title="Підтвердити" onPress={handleUsernameSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default UsernameInput;
