import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function App() {
  const [value,setValue] = React.useState('placeholder');
  
  }

  return (
    <View style={styles.container}>
    <TextInput style={styles.edit} 
    clearTextOnFocus='true'
    onChangeText= {text => setValue(text)}></TextInput>
    <Text style= {styles.textView}>{value}</Text>
    <Button title='Clear' onPress={() => setValue('')}></Button>
    <Switch>
      
    </Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },

edit:{
  borderWidth: 2,
  fontSize: 20,
  borderColor: 'black',
  width: '90%'
},

  textView: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: 'red',
    color: 'black'
  }
});
