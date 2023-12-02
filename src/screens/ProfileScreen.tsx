import React from 'react';
import {View, Text, Image} from 'react-native';

function ProfileScreen() {
    return (
        <View>
            <Text>Інформація про себе</Text>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5vbnltb3VzfGVufDB8fDB8fHww' }}
                style={{ width: 100, height: 100 }}
            />
        </View>
    );
}
export default ProfileScreen;
