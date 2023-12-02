import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import NewsScreen from "../screens/NewsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabNavigator;
