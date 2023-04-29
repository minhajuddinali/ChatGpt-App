import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Login({navigation}) {
  function push()
  {
    navigation.navigate('Chatserver');
  }

  return (
    
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.innercontainer}>
        <Text style={styles.textstyle}>CHAT GPT</Text>
      <Image
        style={{width:200,height:200,paddingTop:20,borderRadius:60}}
        source={require('../assets/chat.png')}
      />
      </View>
      <View style={styles.innercontainer}>
        <TextInput placeholder='Enter your name..' style={styles.input}/>
        <Button title='continue' color={'cyan'} style={{overflow:'hidden'}}
        onPress={push}
        
        />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:20,
    paddingHorizontal:10,
    borderWidth:2
  },
  innercontainer:
  {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  textstyle:
  {
    paddingTop:20,
    paddingBottom:70,
    fontSize:40,
    fontWeight:'bold',
    color:'cyan'
  },
  input:
  {
    borderWidth:1,
    width:'90%',
    padding:10,
    fontSize:24,
    backgroundColor:'white',
    marginVertical:30,
    borderRadius:10,
  },
});
