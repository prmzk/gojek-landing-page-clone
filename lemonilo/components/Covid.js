import React from 'react'
import {Text, Image, View, ScrollView } from 'react-native'

import Card from './Card'

export default function Covid() {
    return (
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 18, marginTop: 10}}>Support a cause</Text>
          <Text style={{fontFamily: 'MaisonNeue-Book', fontSize: 16, marginTop: 10, paddingRight: 20}}>Your support will make the most difference to those in need during these difficult times.</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
          style={{alignSelf: 'stretch', flexDirection: 'row', padding: 10}}>
            <Card uri="https://imgix.kitabisa.com/486463cc-5ed0-40e1-be5c-cf00dd1f3f94.jpg?ar=16:9&w=664&auto=format,compress" title="Covid-19 info centre"></Card>
            <Card uri="https://miro.medium.com/max/1200/1*8cXmKVyeIV6_C8CzgPnxYQ.jpeg" title="Prevent Covid-19"></Card>
          </ScrollView>
        </View>
    )
}
