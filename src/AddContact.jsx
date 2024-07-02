import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const AddContact = ({ navigation, route }) => {
  const { setDatas } = route.params;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleData = () => {  
    if (name && number) {
      const newData = { name, number };
      setDatas(prevData => [...prevData, newData]);
      setName('');
      setNumber('');
      setTimeout(() => {
        navigation.goback()
      }, 2000);
    } else {
      // Handle case where either name or number is empty
      alert('Please enter both name and number');
    }
  };

  return (
    <View>
      <Text style={{ marginLeft: 30, marginTop: 20 }}>Enter Contact Details</Text>
      <TextInput
        placeholder='Enter the name'
        value={name}
        onChangeText={(val) => setName(val)}
        style={Styles.name1}
      />
      <TextInput
        placeholder='Enter the number'
        value={number}
        onChangeText={(val) => setNumber(val)}
        style={Styles.name1}
        keyboardType='numeric'
      />
      <TouchableOpacity onPress={handleData}>
        <Text style={Styles.btn}>Enter the data</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  name1: {
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    width: 300,
    borderRadius: 12,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '400',
  },
  btn: {
    marginTop: 40,
    borderWidth: 1,
    width: 200,
    padding: 12,
    borderRadius: 12,
    height: 50,
    marginLeft: 90,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    backgroundColor: 'lightgreen',
  },
});

export default AddContact;
