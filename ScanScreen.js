import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.Screenscan}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Image 
        source={require('./assets/anhscan.png')} 
        style={styles.scan}>
      </Image>
      <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
          <Image 
              source={require('./assets/anhscan.png')}
              style={styles.icon}
          />
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Payment')}>
              <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  Screenscan: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingBottom: 150,
  },
  productName: { 
    fontSize: 20,
    left: 20,
    padding: 15,
  },
  productInfo: { 
    position: 'absolute',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 15,
    width:  350,
    left: 20, 
    backgroundColor: '#fff', 
    borderRadius: 20, 
    bottom: 100, 
  },
  addText: { 
    color: '#fff', 
    fontSize: 24 
  },
  icon: {
    top: 1, 
    width: 50,
    height: 80,
    left: -200, 
    borderRadius: 10 ,
  },
  scan: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  productTitle: { 
    fontSize: 14,
    top: -20,
    left: 95,
    color: '#666' 
  },
  addButton: { 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    backgroundColor: '#007AFF', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    width: 60,
    height: 60,
    borderRadius: 9,
    backgroundColor:'#F8F8FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#000',
    ontSize:25,
    fontWeight:600.
  },
});