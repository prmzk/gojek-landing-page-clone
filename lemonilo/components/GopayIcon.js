import React from 'react'
import {Text, Image, View } from 'react-native'

export default function GopayIcon({ data }) {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={data.icon} style={{width: 35, height: 35}}/>
            <Text style={{fontFamily: 'MaisonNeue-Bold', color: '#fff', marginTop: 5}}>{data.name}</Text>
        </View>
    )
}
