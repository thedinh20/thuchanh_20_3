import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import Payment from './Payment';
import SuccessScreen from './SuccessScreen';


const Tab = createBottomTabNavigator();


const HistoryScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>History</Text>
      </View>
  );
};

const CartScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>Cart</Text>
      </View>
  );
};
const NotificationScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>Notifications</Text>
      </View>
  );
};

const App = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator
              screenOptions={{
                  tabBarStyle: {
                      position: 'absolute',
                      left: 20,
                      right: 20,
                      elevation: 0,
                      backgroundColor: '#ffffff',
                      borderTopEndRadius: 30,
                      borderTopStartRadius: 30,
                      height: 80,
                      shadowColor: '#7F5DF0',
                      shadowOffset: {
                          width: 0,
                          height: 10,
                      },
                      paddingTop: 15,
                      shadowOpacity: 0.25,
                      shadowRadius: 3.5,
                      elevation: 5,
                  },
                  tabBarShowLabel: false,
              }}
          >
              <Tab.Screen 
                  name="Home" 
                  component={HomeScreen} 
                  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Image source={require('./assets/home_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                      ),
                  }}
              />
              <Tab.Screen 
                  name="Notification" 
                  component={NotificationScreen} 
                  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Image source={require('./assets/nofi_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                      ),
                  }}
              />
              <Tab.Screen 
                  name="Scan" 
                  component={ScanScreen} 
                  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Image source={require('./assets/scan_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                      ),
                  }}
              />
              <Tab.Screen 
                  name="History" 
                  component={HistoryScreen} 
                  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Image source={require('./assets/history_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                      ),
                  }}
              />
              <Tab.Screen 
                  name="Cart" 
                  component={CartScreen} 
                  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Image source={require('./assets/cart_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                      ),
                  }}
              />
              <Tab.Screen 
                    name="Payment" 
                    component={Payment} 
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                        tabBarIconStyle: { display: 'none' },
                    }}
                />
                <Tab.Screen 
                    name="SuccessScreen" 
                    component={SuccessScreen} 
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                        tabBarIconStyle: { display: 'none' },
                    }}
                />
          </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  exploreText: {
    color: '#007bff',
    fontSize: 16,
  },
  name: {
    fontSize: 24,
  },
  userName: {
    fontSize: 18,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginVertical: 10,
  },
  insights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '49%',
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

});