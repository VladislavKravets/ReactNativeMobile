import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./src/screens/ProfileScreen";
import KafedraScreen from "./src/screens/KafedraScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Drawer = createDrawerNavigator();

function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeDrawer"
          screenOptions={{
            activeTintColor: '#e91e63',
          }}
        >
          <Drawer.Screen name="Домашня сторінка" component={HomeScreen} />
          {/*<Drawer.Screen name="Про себе" component={AboutUsScreen} />*/}
          <Drawer.Screen name="Профіль" component={ProfileScreen} />
          <Drawer.Screen name="URL на кафедру">
            {KafedraScreen}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default App;
