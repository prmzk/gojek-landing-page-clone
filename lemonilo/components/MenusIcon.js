import React from 'react'
import {Text, Image, View, TouchableOpacity } from 'react-native'

export default function GopayIcon({ data, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={data.icon} style={{width: 45, height: 45}}/>
            <Text style={{fontFamily: 'MaisonNeue-Book', marginTop: 15, fontSize: 16}}>{data.name}</Text>
        </View>
        </TouchableOpacity>
    )
}
