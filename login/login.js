import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, 
  KeyboardAvoidingView, 
  Image, TextInput, 
  TouchableOpacity, 
  ImageBackground,
  Animated
 } from 'react-native';
import styles from './styles';

export default function Login() {

  const[offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const[opacity] = useState(new Animated.Value(0));

  useEffect(()=> {

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 2,
      }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
    })
    ]).start();

  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
        source={require('../assets/logo.png')}
        />
      </View>

      <Animated.View style={[styles.container, { 
        opacity: opacity,
        transform: [{translateY: offset.y }] }]}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autocorrect={false}
        onChangeText={()=> {}}
        />  
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autocorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
           <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
           <Text style={styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>

      </Animated.View>  
    </KeyboardAvoidingView>
  )
}
