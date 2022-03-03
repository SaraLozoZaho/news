import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,  SafeAreaView, ScrollView } from 'react-native';
import {map} from 'lodash';
import New from './src/components/New';
import { getNewsApi } from './src/api/news';

export default function App() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsApi().then((response) => {
      //console.log(response);
      setNews(response);
    });
  }, []);

  if (!news) return null;

  return (
    <SafeAreaView>
      <Text style={styles.title}>Últimas Noticias</Text>
      <ScrollView style={styles.scrollView}>
        {map(news, (data) => (
          <New key={data.id} data={data} />         
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
   },
   scrollView: {
     height: '100%',
   },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
