
import React from 'react';
import Articles from '../components/Articles'
import Article from '../components/Article'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


let articles = [
    {
        titre: "La plus grande pizza du monde",
        contenu: "L’énorme pizza fabriquée par une équipe de cinq chefs italiens a non seulement obtenu le titre de record du monde mais c’est aussi un clin d’œil aux personnes souffrant d’allergie. En effet, la plus grande pizza du monde est sans gluten. Pour réaliser cette pizza, il a fallu un plat de 40 mètres de diamètres environ. Les ingrédients de cette pizza sont de la farine, de la sauce tomate, du fromage mozzarella, de la margarine, du sel gemme, de la laitue et du vinaigre. Une fois préparée, la pizza pesait 25.6 tonnes. En ce qui concerne la cuisson, il a fallu des équipements spéciaux formés de lances thermiques et répartis en 5000 lots. La cuisson a nécessité, par ailleurs, 48 heures\.Il faut savoir que la réalisation de cette énorme pizza fait suite à l’initiative de Dr Schar, une entreprise spécialiste des aliments sans gluten qui voulait sensibiliser sur la maladie cœliaque.Les cinq chefs italiens ont baptisé leur énorme pizza sous le nom d’Ottavia, en hommage à Auguste Octave, le premier empereur romain.Il est à noter que le précédent record du monde a été réalisé par une équipe sud- africaine en 1990. Leur pizza contenait néanmoins du gluten et faisait 37.4 mètres de diamètres.",
        img: "http://www.portarticles.com/wp-content/uploads/2013/11/record-pizza.jpg",
        dateDePublication: new Date(),
        auteur: {
            nom: "Pepperoni",
            prenom: 'Luigi',
        },
        compteurCommentaires: 449,
        compteurLike: {
            nombrePour: 761,
            nombreContre: 57,
        },
    },
    {
        titre: "Un chien mord une vieille dame",
        contenu: "Le propriétaire d'un chien d'attaque a été condamné hier. Le prévenu s'énerve lorsque la procureure Jeanne-Chantal Capiez demande au tribunal de lui interdire de détenir des animaux : « On ne m'enlèvera pas mes chiens ! Non ! ». Le quadragénaire a déjà dû se séparer de l'un d'eux : un chien d'attaque classé en première et deuxième catégorie. Le 13 mars dernier, de passage à Moulins, l'homme, look routard, domicilié à la Croix- Rouge à Montpellier, arrête son van sur le parking de Buffalo Grill.Il attache ses chiens au camion.Il était en train de discuter à côté du van, lorsqu'il a entendu une dame crier. « Vous avez fait lâcher le chien avant de porter secours à cette dame âgée qui a été amené à l'hôpital », résume le président Philippe Vignon. Le chien d'attaque avait planté ses crocs dans la jambe de la victime qui passait par là pour se rendre chez le boulanger: « Elle a eu des plaies au mollet, 21 jours d'interruption temporaire de travail (ITT). C'est dire si les blessures sont importantes.Elle a été très choquée », décrit son avocate M e Demure.« Elle a subi des examens médicaux, notamment pour savoir si elle n'avait pas contracté la rage ». L'animal pas vacciné contre la rage Le chien n'était en effet pas vacciné. Le prévenu n'avait effectué aucune démarche liée à la détention d'un chien d'attaque : il n'avait pas de permis de détention, il n'était pas non plus assuré pour son chien.Le jour où il a mordu la victime, le chien ne portait pas non plus de muselière pourtant obligatoire. Le propriétaire, au RSA, reconnaît ses torts: « Je suis totalement en faute.J'avais été voir un vétérinaire pour régler les papiers mais, au même moment, ma compagne était enceinte et ça m'est sorti complètement de la tête.On n'avait jamais eu de problème avec ce chien. Ona des enfants.. C'était une crème ».Il s'en est séparé en l'abandonnant à la SPA. Condamnation.Le propriétaire du chien a été condamné à 2 mois de prison avec sursis et mise à l'épreuve pendant deux ans, il devra verser 2.000 € à la victime au titre du préjudice moral et payer trois amendes d'un montant total de 90 €.",
        img: "https://cdn.shopify.com/s/files/1/2614/0886/products/jouet_chien_main_arranchee_coupee_sang_halloween_drole_13_grande.png?v=1555940940",
        dateDePublication: new Date(),
        auteur: {
            nom: "Lepetit",
            prenom: 'Nicolas',
        },
        compteurCommentaires: 666,
        compteurLike: {
            nombrePour: 12,
            nombreContre: 999,
        },
    },
]



export default function ArticlesPage(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Articles"
                component={(props) => <Articles 
                    articles={articles} 
                    navigation={props.navigation} 
                    onArticleCardPress={(article)=> props.navigation.navigate('Article',{ article: article})}
                />}
                options={{ title: 'Articles' }}
            />
            <Stack.Screen name="Article" component={(props) => <Article article={props.route.params.article} />} />
        </Stack.Navigator>
    )
}