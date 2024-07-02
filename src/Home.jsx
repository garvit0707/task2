import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

const Home = ({navigation}) => {
  const [datas, setDatas] = useState([]);
  const handlename = () => {
    navigation.navigate('Add-contact-screen', {setDatas});
  };
  console.log(datas);
  return (
    <View>
      <Text>hello welcome this is the contact app</Text>
      <FlatList
        data={datas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Number: {item.number}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={{position: 'relative'}} onPress={handlename}>
        <Image
          source={require('../images/add.png')}
          style={{
            height: 70,
            width: 70,
            position: 'absolute',
            top: 550,
            right: 20,
          }}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
