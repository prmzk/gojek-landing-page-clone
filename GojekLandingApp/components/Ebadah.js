import React from 'react'
import {Text, Image, View, ScrollView } from 'react-native'

import Card from './Card'

export default function Ebadah() {
    return (
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 18, marginTop: 10}}>Ebadah</Text>
          <Text style={{fontFamily: 'MaisonNeue-Book', fontSize: 16, marginTop: 10, paddingRight: 20}}>Ebadah in Ramadhan Mubaraq.</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
          style={{alignSelf: 'stretch', flexDirection: 'row', padding: 10}}>
            <Card uri="https://www.infojek.com/wp-content/uploads/2020/04/Promo-Ebadah-Gojek.jpg" title="Learn online during Ramadhan 🕌"></Card>
          </ScrollView>
        </View>
    )
}
