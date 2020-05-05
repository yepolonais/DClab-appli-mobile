
import React, {useState, useEffect} from 'react';
import axios from 'axios';


import Articles from '../components/Articles'
import Article from '../components/Article'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();





export default function ArticlesPage(props) {

    const [articles, setArticles] = useState([])

    //Se fait au premier chargement du composant
    useEffect(() => {
        axios.get('https://5eb1784236d3ee001682de2b.mockapi.io/articles')
            .then((response) => {
                setArticles(response.data)
            })
    }, [])


    const handleArticleChange = (article, index)=>{
        let newArticles = [...articles];
        newArticles.splice(index,1,article);
        console.log('newArticles', newArticles)
        setArticles(newArticles);
    };

    const articlesComponent = (props) => <Articles
        articles={articles}
        navigation={props.navigation}
        onArticleCardPress={(index) => props.navigation.navigate('Article', { index:index })}
    />;

    const articleComponent = (props) => <Article 
        onArticleChange = {handleArticleChange}
        article={articles[props.route.params.index]}
        index={props.route.params.index}
    />;

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Articles"
                component={articlesComponent}
                options={{ title: 'Articles' }}
            />
            <Stack.Screen name="Article" component={articleComponent} />
        </Stack.Navigator>
    )
}