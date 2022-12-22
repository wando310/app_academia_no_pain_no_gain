import React from "react";

import { View, Image, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'

import * as Anima from 'react-native-animatable'

const Screen_home = ({ navigation }) => {
    
    const nextPageTreino = () => navigation.navigate('treino')
    const nextPageImc = () => navigation.navigate('imc')

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img_fundo} source={require('../../image/img_1.jpg')} />
            <View style={styles.container_shadow}>
                <Anima.Image animation='zoomIn' duration={2000} source={require('../../image/logo_1.png')} style={styles.img_logo} />
                <TouchableOpacity onPress={ nextPageTreino } style={ styles.btn }>
                    <Image source={require('../../image/img_4.jpg')} style={styles.img_treino} />
                    <Anima.Text animation='zoomIn' duration={1000} style={ styles.text_treino } >Escolha seu treino</Anima.Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ nextPageImc } style={ styles.btn }>
                    <Image source={require('../../image/imc_1.jpg')} style={styles.img_treino} />
                    <Anima.Text animation='zoomIn' duration={3000} style={ styles.text_imc } >Calcule seu IMC</Anima.Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Screen_home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_fundo: {
        height: '100%',
    },
    container_shadow: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0, .4)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_logo: {

    },
    btn:{
        width:'90%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    img_treino:{
        width:'100%',
        height:'100%',
        position:'absolute',
        borderRadius:15,
        borderWidth:4,
        borderColor:'rgba(0,0,0, .3)',
        
    },
    text_treino:{
        color:'#fff',
        fontSize:35,
        fontWeight:'900',
        fontStyle:'italic',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    text_imc:{
        color:'#a524cb',
        fontSize:35,
        fontWeight:'900',
        fontStyle:'italic',
        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    }
})