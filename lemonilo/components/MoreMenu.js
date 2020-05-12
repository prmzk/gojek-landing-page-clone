import React from 'react'
import {StyleSheet, Text, Image, View, ScrollView, TouchableHighlight } from 'react-native'

import goMenusdata from '../database/gomenus.js'
import moreMenusData from '../database/moremenus.js'
const menu1 = goMenusdata.slice(0, 4)
const menu2 = goMenusdata.slice(4, 8)
import MenusIcon from '../components/MenusIcon.js'

export default function MoreMenu({handleVisible}) {
    return (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{width: 350}} showsVerticalScrollIndicator={false}>
                <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 22}}>Your Favorites</Text>
                <View style={styles.goMenus}>
                    <View style={styles.gopayContent2}>
                    {menu1.map((data, i) => (
                        <MenusIcon data={data} key={i}></MenusIcon>
                    ))}
                    </View>
                    <View style={{...styles.gopayContent2, marginTop: 20}}>
                    {menu2.map((data, i) => (
                        <MenusIcon data={data} key={i} handlePress={() => {
                        setModalVisible(true);
                        }}></MenusIcon>
                    ))}
                    </View>
                </View>
                <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 22, marginTop: 25}}>Other Services</Text>
                    {moreMenusData.map((moreMenu, i) => (
                        <View>
                            <View style={{flexDirection: 'row'}}>
                            <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 18, marginTop: 25}}  key={i}>{moreMenu.category}</Text>
                            <Text style={{fontFamily: 'MaisonNeue-Medium', fontSize: 18, marginTop: 25, color: 'gray', marginLeft: 10}}>({moreMenu.menus.length})</Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 15}}>
                            {moreMenu.menus.map((data, i) => (
                                <View style={{paddingHorizontal: 10, minWidth: 80}}>
                                     <MenusIcon data={data} key={i} handlePress={() => {
                                    setModalVisible(true);
                                    }}></MenusIcon>
                                </View>
                            ))}
                            </ScrollView>
                        </View>
                        
                    ))}
            </ScrollView>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 20 }}
              onPress={handleVisible}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 90,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 375,
        height: 600
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
        alignSelf: 'center'
        },
        textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    gopayContent2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      width: 300,
      marginTop: 20,
    },
})



