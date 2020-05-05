import React from 'react';
import { ScrollView,View, Text, Image, StyleSheet } from 'react-native';

import Comment from './Comment';


export default function Article(props) {


    function dateToString(date) {
        date = new Date(date)
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    let img
    if (props.article.img) {
        img = {
            uri: props.article.img
        }
    }

    const handleAddComment = (comment)=>{
        const newCommentaires = [...props.article.commentaires,comment];
        const newArticle = { ...props.article, commentaires:newCommentaires };
        console.log('NewArticle', newArticle, props.index);
        props.onArticleChange(newArticle, props.index);
    };

    return (
        <ScrollView  style={[styles.article]}>
            <View style={[styles.articleCard]}>
                <View style={styles.articleBody}>
                    <Text style={[styles.defaultPolice, styles.articleTitle]}>{props.article.title}</Text>
                    <Image
                        style={styles.articlePic}
                        source={{
                            uri: props.article.img,
                        }}
                    />
                    <Text style={[styles.defaultPolice, styles.articleContent]}>{props.article.content}</Text>
                </View>
                <View style={styles.articleFooter}>
                    <Text style={[styles.articleDate]}>Date de publication : {dateToString(props.article.publishingDate)}</Text>
                    {/* <Text style={[styles.articleAuthor]}>Ecrit par : {props.article.auteur.nom} {props.article.auteur.prenom}</Text>
                    <View style={styles.articleCompteurs}>
                        <Text style={[styles.defaultPolice, styles.articleComment]}>Commentaire(s): {props.article.compteurCommentaires}</Text>
                        <View>
                            <Text style={[styles.defaultPolice, styles.articleLike]}>Like(s): {props.article.compteurLike.nombrePour}</Text>
                            <Text style={[styles.defaultPolice, styles.articleLike]}>Dislike(s): {props.article.compteurLike.nombreContre}</Text>
                        </View>
                    </View> */}
                </View>
                {/* <View>
                    <Comment 
                        onAddComment = { handleAddComment }
                        comments={props.article.commentaires}/>
                </View> */}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    defaultPolice:{
        color: "black",
    },
    articleCard: {
        backgroundColor: "white",
        paddingVertical: 40,
        paddingHorizontal: 20,
        flex: 1,
    },
    article: {
        paddingHorizontal:20,
        flex: 1,
    },
    articlePic: {
        height: 150,
        width: null,
    },
    articleTitle: {
        backgroundColor: "#6CC24A",
        color: "white",
        fontWeight:"bold",
        alignSelf: "center",
        paddingVertical:10,
        textAlign:"center",
        marginBottom: 40,
        fontSize: 40,
    },
    articleContent: {
        marginVertical: 40
    },
    articleFooter:{
        backgroundColor:"white",
        marginBottom:50,
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