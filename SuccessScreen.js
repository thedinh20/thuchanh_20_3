import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SuccessScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white',height:'100%'}}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>{'<'}</Text>
            </TouchableOpacity>
            <View style={{marginTop:100,height:280.39,width:250.55,marginLeft:75}}>
                <Image source={require('./assets/bg_success.png')}></Image>
            </View>
            <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 700,fontSize: 18,marginTop:50,textAlign:'center'}}>Payment Success, Yayy!</Text>
            <Text style={{textAlign:'center',marginTop:20,fontSize:16,color:'#7A7A7A',width:300,marginLeft:65}}
            >we will send order details and invoice in your contact no. and registered email</Text>
            <Image source={require('./assets/icon_checkdetails.png')}
            style={{marginTop:30,marginLeft:150}}></Image>
            <TouchableOpacity style={{backgroundColor:'#5A6CF3',width:334,height:62,borderRadius:16,justifyContent:'center',alignItems:'center',marginLeft:40,marginTop:40}}>
                <Text style={{color:'white',fontSize:20,fontWeight:600}}>
                    Download Invoice
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default SuccessScreen;
