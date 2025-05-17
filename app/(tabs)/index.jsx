import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {

    const logo = require('../../assets/images/logo.png');
    const cards = require('../../assets/images/cards.png');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode='contain'/>
      <Image source={cards} style={styles.cardsimage} resizeMode='contain'/>
      <Text style={styles.DiscoverText}>Discover Endless</Text>
      <Text style={styles.PossibilitiesText}> Possibilities with <Text style={styles.AoraText}>Aora</Text></Text>
      <Text style={styles.MeetsText}>Where Creativity Meets Innovation: Embark on</Text>
      <Text style={styles.JourneyText}>a Journey of Limitless Exploration with Aora</Text>
      <Pressable style={styles.EmailButton}>
        <Text style={styles.EmailButtonText} >Continue with Email</Text>
      </Pressable>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    backgroundColor: 'black',
  },
  image: {
   width: 193,
   resizeMode: 'contain',
   marginTop: 40,
   padding: '10%',
   alignSelf: 'center'
  },
  cardsimage: {
    padding: '10%',
    width: 342,
    height: 274,
    alignSelf: 'center'
  },
  DiscoverText: {
    color: 'white',
    fontSize: 30,
    marginTop: 30,
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },
  AoraText: {
    color: '#FFA300',
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },
  PossibilitiesText: {
     color: 'white',
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },
  MeetsText: {
    fontSize: 14,
    marginTop: 30,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    color: '#CDCDE0'
  },
  JourneyText: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    color: '#CDCDE0'
  },
  EmailButton: {
    backgroundColor: '#FFA300',
    borderRadius: 8,
    marginTop: 70,
    padding: 10,
    alignSelf: 'center',

  },
  EmailButtonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins',
  }
  

})