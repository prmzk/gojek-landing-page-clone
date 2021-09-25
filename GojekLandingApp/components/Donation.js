import React from 'react'
import {Text, Image, View, ScrollView } from 'react-native'

import Card from './Card'

export default function Donation() {
    return (
        <View style={{marginTop: 30}}>
          <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 18, marginTop: 10}}>Donation</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
          style={{alignSelf: 'stretch', flexDirection: 'row', padding: 10}}>
            <Card uri="https://miro.medium.com/max/9020/1*wpbDPMzqkTmCtweDtjCBlw.jpeg" title="Kind over matter 🙏"></Card>
          </ScrollView>
        </View>
    )
}
