import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity,Alert} from 'react-native';

import guitar from "./assets/guitar.jpg"

export default class App extends React.Component{
 
    state={
      value:0 ,
      total:0,
      
    }
    

    increament=()=>{
      this.setState({
        value:this.state.value+1,
        total:this.state.total+1,
      
    })
  }

  decreament=()=>{
    this.setState({
      value:this.state.value-1,
      total:this.state.total-1,
  })
  
 }
 
  

    render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cart</Text>
        
        <View >
        <Text style={styles.itemname}> Acoustic Guitar</Text>
        
        <Text style={styles.prices}>Subtotal:50$</Text>
        <Image source={guitar} style={styles.pic}/>
        

       <View style={styles.btn}>
        <Button onPress={this.decreament} title="-"/>
      
        <Text>   {this.state.value}  </Text>
        <Button onPress={this.increament} title="+"/>
        </View>
        <View>
          <Text style={styles.summary}> ORDER SUMMARY</Text>
          <Text style={styles.totalsum}> {"Total:        "+ (this.state.total)*50}</Text>
          
        </View>

        <View>
        <Button title="Checkout" onPress={() => Alert.alert("Total  price  : "+(this.state.total)*50) }/>
        </View>
        <View>
       
      </View>
        
        <View>
        
        </View>
      
        </View>

        <View>

        </View>
        
        <StatusBar style="auto" />
      </View>
    );
  }
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
 
  header:{
    backgroundColor:'#b3d9ff',
    textAlign:'center',
    paddingTop:60,
  },
  pic:{
    marginLeft:50,
    marginBottom:70,
    width:70,
    height:170
  },
  itemname:{
    color:'#1a53ff',
  marginLeft:150,
    marginTop:100,
  },
  btn:{
    flexDirection:"row",
    marginLeft:230,
    marginTop:-90,
  },
  prices:{
    color:'#1a53ff',
    marginLeft:150,
    marginTop:20
  },
  buttonText: {
    color: "red",
  },
  summary:{
    marginTop:50,
    fontWeight:"bold",
    fontSize:25,
  },
  totalsum:{
    marginTop:10,
    color:"#b3d9ff",
    fontSize:30
  }

});