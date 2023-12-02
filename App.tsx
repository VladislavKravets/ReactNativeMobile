import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeTabNavigator from "./src/navigation/HomeTabNavigator";
import KafedraScreen from "./src/screens/KafedraScreen";

const Drawer = createDrawerNavigator();

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Drawer.Navigator
                        initialRouteName="HomeDrawer"
                        screenOptions={{
                            activeTintColor: '#e91e63',
                        }}
                    >
                        <Drawer.Screen name="Домашня сторінка" component={HomeTabNavigator} />
                        <Drawer.Screen name="Про себе" component={ProfileScreen} />
                        {/*<Drawer.Screen name="Про кафедру" component={AboutUsScreen} />*/}
                        <Drawer.Screen name="URL на кафедру" component={KafedraScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
