import React from 'react'
import {Text, Image, View, ScrollView } from 'react-native'

export default function Card({ uri, title }) {
    return (
        <View style={{marginRight: 20, marginTop: 10, borderRadius: 15, backgroundColor: '#fff', shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 2,  
            elevation: 5}}
       >
            <Image source={{uri: uri}} style={{width: 280, height: 180, borderTopLeftRadius: 15,  borderTopRightRadius: 15}}></Image>
            <View style={{paddingTop: 5, paddingHorizontal: 10, height: 120, width: 280}}>
                <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 16, marginTop: 10, paddingRight: 20}}>{title}</Text>
                <Text style={{fontFamily: 'MaisonNeue-Book', fontSize: 16, marginTop: 10, paddingRight: 20}}>Lorem ipsum dolor sit amet, blandit appetere complectitur id pro, an nisl equidem per. </Text>
            </View>
        </View>
    )
}
