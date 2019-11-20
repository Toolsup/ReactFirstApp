import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        console.log('constructor');
        this.dataAhi = {
          titleText: "Bird's Nest",
          bodyText: 'This is not really a bird nest.'
        };
      }

    static navigationOptions = {
      title: 'Welcome',
    };
    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.dataAhi.titleText}</Text>
            <Text style={styles.instructions}>{this.dataAhi.bodyText}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    content: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });