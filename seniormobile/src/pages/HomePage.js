/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Button,StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform, FlatList, Image, SafeAreaView, ScrollView
} from 'react-native';
import Slide from '../components/Slider';

import 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';


function HomePage(props) {



    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.slider}>
                    <Slide />
                </View>


                <View style={styles.BoxAll}>
                <Text style={styles.TextCourse}>“Sports as a Way of Life”</Text>
                    <View style={styles.tBox}>

                        <TouchableOpacity style={styles.mainbox} title="Press Me">
                        
                            <View style={styles.box1}>
                            <Image
          source={require('../images/soccer.png')}
          style={styles.Img}/>
          <Text style={styles.textBox}>Football</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mainbox2} title="Press Me">
                        
                            <View style={styles.box2}>
                            <Image
          source={require('../images/basketball.png')}
          style={styles.Img2}/>
          <Text style={styles.textBox2}>Basketball</Text>

                            </View>
                        </TouchableOpacity>



                    </View>
                    
                    <View style={styles.tBox}>

                    <TouchableOpacity style={styles.mainbox2} title="Press Me">
                        
                        <View style={styles.box2}>
                        <Image
          source={require('../images/volleyball.png')}
          style={styles.Img2}/>
          <Text style={styles.textBox2}>Volleyball</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainbox} title="Press Me">
                        
                        <View style={styles.box1}>
                        <Image
          source={require('../images/tennis.png')}
          style={styles.Img}/>
          <Text style={styles.textBox}>Tennis</Text>
                        </View>
                    </TouchableOpacity>



                    </View>
                    <View style={styles.tBox}>

                    <TouchableOpacity style={styles.mainbox} title="Press Me">
                        
                        <View style={styles.box1}>
                        <Image
          source={require('../images/ping-pong.png')}
          style={styles.Img}/>
          <Text style={styles.textBox}>Ping-Pong</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainbox2} title="Press Me">
                        
                        <View style={styles.box2}>
                        <Image
          source={require('../images/badminton.png')}
          style={styles.Img2}/>
          <Text style={styles.textBox2}>Badminton</Text>
                        </View>
                    </TouchableOpacity>



                    </View>
                    <View style={styles.tBox}>

                    <TouchableOpacity style={styles.mainbox2} title="Press Me">
                        
                        <View style={styles.box2}>
                        <Image
          source={require('../images/swimmer.png')}
          style={styles.Img2}/>
          <Text style={styles.textBox2}>Swim Pool</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainbox} title="Press Me">
                        
                        <View style={styles.box1}>
                        <Image
          source={require('../images/dancer.png')}
          style={styles.Img}/>
          <Text style={styles.textBox}>Group Exercise</Text>
                        </View>
                    </TouchableOpacity>



                    </View>
                    <View style={styles.tBox}>

                    <TouchableOpacity style={styles.mainbox} title="Press Me">
                        
                        <View style={styles.box1}>
                        <Image
          source={require('../images/squash.png')}
          style={styles.Img}/>
          <Text style={styles.textBox}>Squash</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainbox2} title="Press Me">
                        
                        <View style={styles.box2}>
                        <Image
          source={require('../images/judo.png')}
          style={styles.Img2}/>
          <Text style={styles.textBox2}>Martial Arts</Text>
                        </View>
                    </TouchableOpacity>



                    </View>
                    <View style={styles.tBox}>

                    <TouchableOpacity style={styles.mainbox2} title="Press Me">
                        
                        <View style={styles.box2}>
                        <Image
          source={require('../images/running.png')}
          style={styles.Img2}/>
          <Text style={styles.textBox2}>Running Track</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainbox} title="Press Me">
                        
                        <View style={styles.box1}>
                        <Image
          source={require('../images/dumbbell.png')}
          style={styles.Img}/>
          <Text style={styles.textBox}>Fitness</Text>
                        </View>
                    </TouchableOpacity>



                    </View>
                </View>


            </View>
        </ScrollView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',



    },
    box1:{
        
       alignContent:'center',
       
    },
    box2:{
        marginTop:'9.5%',
        alignContent:'center',
        
        
        
     },
    TextCourse:{
        marginTop:10,
        fontSize:25,
        fontWeight:'bold',
        color:'#0F559D',
        alignSelf:'center',
        alignContent:'center',
    },
    textBox:{
        
        fontSize:17,
        fontWeight:'bold',
        color:'#0F559D',
        alignSelf:'center',
        left:20,
        right:10,
       
       alignItems:'center',
        
    },
    textBox2:{
        
        fontSize:17,
        fontWeight:'bold',
        color:'#0F559D',
        alignSelf:'center',
        justifyContent:'center',
        marginLeft:'24%',
        alignItems:'center',
        
        right:2,
        
        
    },
    BoxAll: {
        flex: 1,
        alignContent:'center',
        
        

    },
    tBox: {
        flexDirection: 'column',
        flexWrap: 'wrap',


        maxWidth: '100%',
        height: 200,
        backgroundColor: 'transparent',
        paddingBottom: 50,
    },
    textOne: {

    },
    mainbox: {
        justifyContent:'center',
        
            borderWidth:1,
            borderColor:'#0F559D',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 25,
        width: 170,
        height: 170,
        backgroundColor: 'white',
        marginLeft: '5%',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 20,

        elevation: 7,
    },
    mainbox2: {
        borderWidth:1,
        borderColor:'#D3252A',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 25,
    width: 170,
    height: 170,
    backgroundColor: 'white',
    marginLeft: '5%',
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.40,
    shadowRadius: 10,

    elevation: 7,
},
    slider: {
        flexGrow: 1,
        height: 270,

    },
    Img:{
        width:80,
        height:80,
        justifyContent:'center',
      marginLeft:'26.5%',
      marginBottom:'20%'
       

    },
    Img2:{
        width:80,
        height:80,
        justifyContent:'center',
      marginLeft:'26.5%',
      marginBottom:'20%'
       

    }

}); export default HomePage;