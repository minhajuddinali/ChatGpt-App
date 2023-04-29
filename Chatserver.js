import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';
import { StyleSheet, Text ,TextInput ,Button} from 'react-native';
import { IconButton } from "@react-native-material/core";
import * as React from 'react';
import Iconicons from '@expo/vector-icons/Ionicons';
import axios  from 'axios';
import { useState } from 'react';
export default function Chatserver()
{
  const [text,settext]=useState('');

  const [data,setdata]=useState('');
  const prompt=text;
  function push()
    {
      props.onAddTodo(enteredTodoText);
    }
  const connection = async () =>
  {
  
    const response=await axios.post('https://api.openai.com/v1/completions',{
      model: "text-davinci-003",
      prompt:prompt,
      temperature: 0.5,
      max_tokens:10

    },{
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`
      }
    }).then((response)=>{
      setdata(response.data.choices[0].text)
     // console.log(response.data.choices[0].text);
    }).catch((error)=>{console.log(error)});
  }
    return(
        <View style={styles.container}>
                <Text style={styles.text}>welcome to ChatGpt</Text>
                <View style={styles.inputcontainer}>
        <TextInput 
        placeholder='Type here..'
         style={styles.textinput}
         onChangeText={t=>settext(t)}
         />
        <Iconicons name="send" size={49} onPress={connection}/>
     
        </View>
        <View style={styles.cont}>
          <ScrollView>
        <Text style={styles.textttt}>{data}</Text>
          </ScrollView>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: 
    {
        backgroundColor: '#fff',
       
        borderWidth:2,
        // alignItems:'center',
    },
    inputcontainer:
    {
   
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
    },
    textinput:
    {
      borderWidth:2,
      width:'80%',
      padding:12,
      fontSize:20,
      borderRadius:7,
      marginHorizontal:10,
    },
    text:
    {
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:100,
    },
    textttt:
    {
      paddingTop:1,
      fontSize:24,
      color:'black',
      fontWeight:'bold',
    },
    cont:
    {
      height:500,
      borderWidth:4,
       //justifyContent:'center',
       alignItems:'center',
      backgroundColor:'grey',
    }
});