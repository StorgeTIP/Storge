import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import GuidelinesScreen from '../screens/GuidelinesScreen';
import ConsultScreen from '../screens/ConsultScreen';
import ForumScreen from '../screens/ForumScreen';
import RewardScreen from '../screens/RewardScreen'
import RewardGuideScreen from '../screens/RewardGuideScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Storge"
            component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontFamily: 'supergroteska-rg',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: 22,
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                    // borderTopWidth: 2,
                    // borderTopColor: '#f2f2f2',
                    // borderBottomWidth: 2,
                    // borderBottomColor: '#f2f2f2',
                },
                headerRight: () => (
                    <View style={{marginRight: 10}}>
                    <FontAwesome5.Button
                        name="plus"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.navigate('AddPost')}
                    />
                    </View>
                ),
            }}
        />
        <Stack.Screen
            name="AddPost"
            component={AddPostScreen}
            options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#2e64e515',
                    shadowColor: '#2e64e515',
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{marginLeft: 15}}>
                    <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                    </View>
                ),
            }}
        />
        <Stack.Screen
            name="HomeProfile"
            component={ProfileScreen}
            options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{marginLeft: 15}}>
                    <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                    </View>
                ),
            }}
        />
    </Stack.Navigator>
);

const ForumStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Forums" 
            component={ForumScreen} 
            options={{
                headerTitle: 'Forums',
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontFamily: 'supergroteska-rg',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: 22,
                },
                headerStyle: {
                  backgroundColor: '#fff',
                  shadowColor: '#fff',
                  elevation: 0,
                  borderBottomWidth: 1,
                },
            }}
        />
    </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Messages" 
            component={MessagesScreen} 
            options={{
                headerTitle: 'Messages',
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontFamily: 'supergroteska-rg',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: 22,
                },
                headerStyle: {
                  backgroundColor: '#fff',
                  shadowColor: '#fff',
                  elevation: 0,
                  borderBottomWidth: 1,
                },
            }}
        />
        <Stack.Screen 
            name="Chat" 
            component={ChatScreen} 
            options={({route}) => ({
                title: route.params.userName,
                headerBackTitleVisible: false
            })}
        />
    </Stack.Navigator>
);

const ConsultStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Consult"
        component={ConsultScreen}
        options={{
            headerTitle: 'Consultation',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: '#2e64e5',
                fontFamily: 'supergroteska-rg',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: 22,
            },
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#fff',
              elevation: 0,
              borderBottomWidth: 1,
            },
          }}
      />
    </Stack.Navigator>
);


const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Edit Profile',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Guidelines"
        component={GuidelinesScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Rewards"
        component={RewardScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="RewardGuide"
        component={RewardGuideScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
);

const AppStack = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#2e64e5',
            }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                        name="home-outline"
                        color={color}
                        size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Forum"
                component={ForumStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name="ios-people-outline"
                        color={color}
                        size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessageStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name="chatbox-ellipses-outline"
                        color={color}
                        size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Consult"
                component={ConsultStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name="md-pulse"
                        color={color}
                        size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" 
                        color={color} 
                        size={size} 
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppStack;