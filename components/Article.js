import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Article(props) {


    let stringDate = "" + props.article.dateDePublication

    return (
        <View style={[styles.article]}>
                <View style={styles.articleBody}>
                    <Text style={[styles.defaultPolice, styles.articleTitle]}>{props.article.titre}</Text>
                    <Image
                        style={styles.articlePic}
                        source={{
                            uri: props.article.img,
                        }}
                    />
                    <Text style={[styles.defaultPolice, styles.articleContent]}>{props.article.contenu}</Text>
                </View>
                <View style={styles.articleFooter}>
                    <Text style={[styles.articleDate]}>Date de publication : {stringDate}</Text>
                    <Text style={[styles.articleAuthor]}>Ecrit par : {props.article.auteur.nom} {props.article.auteur.prenom}</Text>
                    <View style={styles.articleCompteurs}>
                    <Text style={[styles.defaultPolice, styles.articleComment]}>Commentaire(s): {props.article.compteurCommentaires}</Text>
                        <View>
                            <Text style={[styles.defaultPolice, styles.articleLike]}>Like(s): {props.article.compteurLike.nombrePour}</Text>
                            <Text style={[styles.defaultPolice, styles.articleLike]}>Dislike(s): {props.article.compteurLike.nombreContre}</Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultPolice:{
        color: "white",
    },
    article: {
        // alignItems: "stretch",
        // justifyContent: 'space-between',
        paddingVertical:40,
        paddingHorizontal:20,
        flex: 1,
    },
    articlePic: {
        height: 150,
        width: null,
    },
    articleTitle: {
        alignSelf: "center",
        textAlign:"center",
        marginBottom: 40,
        fontSize: 40,
    },
    articleContent: {
        marginVertical: 40
    },
    articleFooter:{
        backgroundColor:"white",
        
    },
    articleAuthor: {
        alignSelf: "flex-end",
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    articleCompteurs: {
        backgroundColor: "#aaa",
        paddingVertical:10,
        flexDirection: "row",
        justifyContent:"space-around",
    },
    articleComment: {

    },
    articleLike: {

    },
});