import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';



export default function ArticleCard(props) {

    //console.log("ArticleCard.js props.article", props.article)
    return (
        <TouchableHighlight 
            onPress={() => {props.onPress(props.article)}}
            underlayColor="white"
        
        >
            <View style={styles.container}>
                <Text>{props.article.titre}</Text>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        elevation: 20,
        shadowColor: "#00263E",
        shadowOpacity: 5,
        shadowRadius: 15,
    },

})