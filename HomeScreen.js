import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import dictionary from '../database.js'

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            definition:'',
            lexicalCategory:'',
            isSearchPressed:false,
            word: '',
        }
    }

    getWord = (text) => {
      text = text.toLowerCase();
    
      var definedWord = dictionary[text]
      if(definedWord!==undefined){
        var word = definedWord["word"]
        var lexicalCategory = definedWord["lexicalCategory"]
        var definition = definedWord["definition"]
        this.setState({
          "word" : word,
          "lexicalCategory" : lexicalCategory,
          "definition" : definition
        });
      }
      else{
        alert("Sorry this word is not available for now.Try searching for another word");
      }
    };

    render() {
        return (
          <SafeAreaProvider>

            <View style={{backgroundColor:'#D3B5E5'}}>

              <Text style={styles.headerText}>Pocket Dictionary</Text>

              <Image
                style={styles.image}
                source={require("../assets/dictionary.png")}
              />
      
              <TextInput
                style={styles.textInput}
                placeholder="Type here to know the meaning of any word :)"
                onChangeText={(text) => {
                  this.setState({
                    text: text,
                    isSearchedPressed: false,
                    word: 'Loading....',
                    lexicalCategory: '',
                    definition: '',
                  });
                }}
              />
      
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({ isSearchedPressed: true });
                  this.getWord(this.state.text);
                }}>
                <Text style={styles.text}> Search </Text>
              </TouchableOpacity>

              <Text style={styles.text1}>Word:{''}</Text>
              <Text style={styles.text2}>{this.state.word}</Text>

              <Text style={styles.text1}>Type:{''}</Text>
              <Text style={styles.text2}>{this.state.lexicalCategory}</Text>

              <Text style={styles.text1}>Definition:{''}</Text>
              <Text style={styles.text2}>{this.state.definition}</Text>

            </View>
            
          </SafeAreaProvider>
        );
      }

}

const styles = StyleSheet.create({
    textInput: {
      marginTop: 20,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      fontFamily: 'Rockwell',
      fontSize: 20,
      borderWidth: 4,
      borderColor: '#602932',
      backgroundColor: '#DDE1ED',
    },
    button: {
      width: '40%',
      height: 50,
      alignSelf: 'center',
      padding: 5,
      margin: 10,
      borderWidth: 2,
      borderRadius: 4,
      borderColor: '#602932',
      backgroundColor: '#FFD4DB',
    },
    text: {
      textAlign: 'center',
      fontSize: 25,
      alignSelf: 'center',
      fontWeight: 'bold',
      color: '#E4021B'
    },
    text1: {
      textAlign: 'center',
      fontSize: 25,
      alignSelf: 'center',
      fontWeight: 'bold',
      color:"#002952",
      marginRight:470
    },
    text2: {
      fontSize: 21,
      color:"#000C66",
      marginLeft:600,
      marginBottom:50
    },
    headerText: {
      color: "#fffdd0",
      fontFamily: 'Rockwell',
      marginLeft: 550,
      fontSize:30
    },
    image: {
      width: 180,
      height: 180,
      marginTop: 20,
      marginLeft: 600,

    }
  });
  