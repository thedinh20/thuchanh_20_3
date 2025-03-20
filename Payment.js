import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Payment = ({navigation}) => {
    return (
        <View>
          <View style={styles.paymenthead}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>{'<'}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
              <Image source={require('./assets/icon_checkout.png')} style={{top:150,left:22,width:180,height:32}} />
              <View style={{top:150,marginLeft:40}}>
                  <Image source={require('./assets/icon_money.png')} style={{width:100,height:29,marginLeft:60,marginBottom:5}} />
                  <Text style={{color:'#B1B1B1',fontSize:20,fontWeight:400}}>Icluding GST(18%)</Text>
              </View>
            </View>
          </View>
          <View>
              <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',backgroundColor:'#F8F8FB',width:340,height:80,marginLeft:50,borderRadius:16}}>
                  <TouchableOpacity style={{backgroundColor: '#25D482',borderRadius: 16,flexDirection: 'row',justifyContent:'center',alignItems: 'center',width:170,height:80}}>
                      <Text style={{fontSize: 16,color: '#FFFFFF',fontWeight:600}}>Credit card</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: '#F8F8FB',borderTopRightRadius: 16,borderBottomRightRadius:16,flexDirection: 'row',justifyContent:'center',alignItems: 'center',width:170,height:80}}>
                      <Image source={require('./assets/icon_apple.png')} style={{width: 25, height: 31, marginRight: 10}}></Image>
                      <Text style={{fontSize: 16,color: '#3A3C3F',fontWeight:600}}>Apple Pay</Text>
                  </TouchableOpacity>
              </View>
              <View style={{marginLeft:35,marginTop:20}}>
                  <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                      Card number
                  </Text>
                  <TextInput  style={{width: 355,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                      
                  </TextInput>
              </View>
              <View style={{marginLeft:35,marginTop:20}}>
                  <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                      Cardholder name 
                  </Text>
                  <TextInput style={{width: 355,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                      
                  </TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <View style={{marginLeft:35,marginTop:20}}>
                      <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                          Expiry date
                      </Text>
                      <TextInput style={{width: 156,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                          
                      </TextInput>
                  </View>
                  <View style={{marginLeft:35,marginTop:20}}>
                  <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                      CVV / CVC
                  </Text>
                  <TextInput style={{width: 156,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                  </TextInput>
              </View>
              </View>
              <Text style={{color:'#B1B1B1',textAlign:'center',width:290,marginLeft:70,marginTop:50,fontSize:14,fontWeight:600}}>We will send you an order details to your email after the successfull payment</Text>
              <TouchableOpacity style={{width:335,height:62,backgroundColor:'#25D482',borderRadius:16,justifyContent:'center',alignItems:'center',marginLeft:40,marginTop:30,flexDirection:'row'}}
              onPress={() => navigation.navigate('SuccessScreen')}>
                  <Image source={require('./assets/icon_lock.png')}></Image>
                  <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:600,marginLeft:10}}>
                      Pay for the order
                  </Text>
              </TouchableOpacity>
          </View>
        </View>
    );
  };


export default Payment;

const styles = StyleSheet.create({
    paymenthead: {
        height: 253,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        backgroundColor: '#F8F8FB',
        shadowColor: '#01763F', // Shadow color
        shadowOffset: { width: 1, height: 5 }, // Shadow offset
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 3.84, // Shadow radius
        elevation: 5,
        position:'relative'
    },
    backButton: {
        position: 'absolute',
        top: 60,
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


