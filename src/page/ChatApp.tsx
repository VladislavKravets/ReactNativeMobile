import React, {useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

// @ts-ignore
import maleIcon from '../res/male.jpg';
// @ts-ignore
import femaleIcon from '../res/female.png';

interface Message {
  id: number;
  text: string;
  isMale: boolean;
  username: string;
  replyToId?: number | null;
}

interface ChatAppProps {
  username: string;
}

function ChatApp({username}: ChatAppProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [replyToMessageId, setReplyToMessageId] = useState<number | null>(null);
  const [replyToMessage, setReplyToMessage] = useState<string | null>(null);

  const handleSendMessage = (): void => {
    if (newMessage.trim() === '') {
      return;
    }

    const isMale = Math.random() < 0.5;
    const replyToId = replyToMessageId;
    const id = messages.length; // новий ідентифікатор повідомлення
    const updatedMessages = [
      ...messages,
      {id, text: newMessage, isMale, username, replyToId},
    ];
    setMessages(updatedMessages);
    setNewMessage('');
    setReplyToMessageId(null); // знімаємо ідентифікатор відповіді
  };

  const handleReply = (messageId: number, message: string): void => {
    setReplyToMessageId(messageId);
    setReplyToMessage(message);
  };

  const renderMessage = ({item}: {item: Message}) => {
    const isReply = item.replyToId !== undefined && item.replyToId !== null;
    const parentMessage = isReply
      ? messages.find(message => message.id === item.replyToId)
      : null;

    const renderRightActions = (
      _progress: Animated.AnimatedInterpolation<any>,
      _dragX: Animated.AnimatedInterpolation<any>,
    ) => {
      return (
        <TouchableOpacity
          onPress={() => {
            handleReply(item.id, item.text);
          }}
          style={styles.rightAction}>
          <Text style={styles.actionText}>Відповісти</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
        <View style={styles.messageContainer}>
          <Text style={styles.usernameText}>{item.username}</Text>
          {isReply && parentMessage && (
            <View style={styles.replyContainer}>
              <Text style={styles.replyText}>
                Відповідь на: {parentMessage.text}
              </Text>
            </View>
          )}
          <View style={styles.messageContent}>
            <Image
              source={item.isMale ? maleIcon : femaleIcon}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
      />
      {replyToMessageId && (
        <View style={styles.replyContainer}>
          <Text style={styles.replyText}>Відповідь на: {replyToMessage}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              // setReplyToMessage('');
              setReplyToMessageId(null); // знімаємо ідентифікатор відповіді
            }}>
            <Text style={styles.closeButtonText}>✖️</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Введіть ваше повідомлення..."
        />
        <Button title="Надіслати" onPress={handleSendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
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
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  messageText: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  usernameText: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightAction: {
    backgroundColor: '#ffab00',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
  replyContainer: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginTop: 4,
    // стилі для контейнера з відповіддю
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  replyText: {
    fontStyle: 'italic',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
  },
});

export default ChatApp;
