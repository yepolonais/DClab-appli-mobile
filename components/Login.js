import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';


export default function Login(props) {


    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUsername = (texte) => {
        setUsername(texte)
    }

    const handlePassword = (texte) => {
        setPassword(texte)
    }

    const handleLogin = () => {
        console.log("login infos", username, password)
        props.onLogin(username, password)
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.text]}>Veuillez-vous identifier</Text>
            <TextInput style={[styles.input]} onChangeText={handleUsername} />
            <TextInput style={[styles.input]} onChangeText={handlePassword} />
            <Button onPress={handleLogin} title="Se connecter" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00263E",
        flex: 1,
    },
    text: {
        margin:10,
        fontSize: 30,
        color: "white",
        textAlign:'center'
    },
    input: {
        margin: 5,
        padding: 5,
        backgroundColor:"white",
        borderColor: "#00263E",
    }
});