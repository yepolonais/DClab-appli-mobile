import React from 'react';
import { StyleSheet,View, ScrollView } from 'react-native';

import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';





export default function App() {

  let articleRecupereDepuisLAPI = {
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
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView style={styles.article}>
          <Article article={articleRecupereDepuisLAPI} />
      </ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}


const styleObject = {
  container: {
    flex: 1,
    backgroundColor: "#00A3AD",
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex:1,
  },
  article:{
    margin:15,
  },
  footer: {
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
  },
}

const styles = StyleSheet.create(styleObject);