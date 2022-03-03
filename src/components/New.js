import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function New(props) {
const {data} = props;
console.log(data);


  return (
    <View>
        <Text>News 1</Text>
        <Text>News 2</Text>
        <Text>{data.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})