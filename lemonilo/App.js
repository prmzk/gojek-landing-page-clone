import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, TouchableHighlight, } from 'react-native'
import * as Font from 'expo-font'
import { Platform, StatusBar, Image } from 'react-native'
import { AppLoading } from 'expo'

import GopayIcon from './components/GopayIcon.js'
import MenusIcon from './components/MenusIcon.js'
import Covid from './components/Covid.js'
import Donation from './components/Donation.js'
import Ebadah from './components/Ebadah.js'
import MoreMenu from './components/MoreMenu.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import gopayData from './database/gopay.js'
import goMenusdata from './database/gomenus.js'
const menu1 = goMenusdata.slice(0, 4)
const menu2 = goMenusdata.slice(4, 8)

const Tab = createBottomTabNavigator()

const loadFonts = () => {
  return Font.loadAsync({
    'MaisonNeue-Bold': require('./assets/fonts/MaisonNeue-Bold.ttf'),
    'MaisonNeue-Book': require('./assets/fonts/MaisonNeue-Book.ttf'),
    'MaisonNeue-Light': require('./assets/fonts/MaisonNeue-Light.ttf'),
    'MaisonNeue-Medium': require('./assets/fonts/MaisonNeue-Medium.ttf'),
    'MaisonNeue-Thin': require('./assets/fonts/MaisonNeue-Thin.ttf')
  })
}

function TabNav() {
  return (
    <Tab.Navigator tabBarOptions={{
      labelStyle: {
        paddingTop: 15,
        fontFamily: 'MaisonNeue-Bold',
        fontSize: 12
      },
      style: {
        paddingTop: 15
      },
      tabBarOptions: {
        activeTintColor: 'green'
      },
      showLabel: false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => {
            const [fontLoaded, setFontLoaded] = useState(false)
            if(!fontLoaded){
              return (
                <AppLoading
                startAsync={loadFonts}
                onFinish={() => {
                setFontLoaded(true);
                }}/>
              )
            }
            return (<View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={focused ?  require('./assets/bottomactive1.png') : require('./assets/bottom1.png')} style={{width: 30, height: 30}}/>
              <Text style={{fontFamily: 'MaisonNeue-Medium', fontSize: 12, color: focused ? '#32c73c' : 'gray'}}>Home</Text>
            </View>)
          },
        }} />
      <Tab.Screen name="Orders" component={Orders} options={{
          tabBarLabel: 'Orders',
         tabBarIcon: ({ focused }) => {
            const [fontLoaded, setFontLoaded] = useState(false)
            if(!fontLoaded){
              return (
                <AppLoading
                startAsync={loadFonts}
                onFinish={() => {
                setFontLoaded(true);
                }}/>
              )
            }
            return (<View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={focused ?  require('./assets/bottomactive2.png') : require('./assets/bottom2.png')} style={{width: 30, height: 30}}/>
              <Text style={{fontFamily: 'MaisonNeue-Medium', fontSize: 12, color: focused ? '#32c73c' : 'gray'}}>Orders</Text>
            </View>)
          },
        }} />
      <Tab.Screen name="Chat" component={Chat} options={{
          tabBarLabel: 'Chat',
         tabBarIcon: ({ focused }) => {
            const [fontLoaded, setFontLoaded] = useState(false)
            if(!fontLoaded){
              return (
                <AppLoading
                startAsync={loadFonts}
                onFinish={() => {
                setFontLoaded(true);
                }}/>
              )
            }
            return (<View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={focused ?  require('./assets/bottomactive3.png') : require('./assets/bottom3.png')} style={{width: 30, height: 30}}/>
              <Text style={{fontFamily: 'MaisonNeue-Medium', fontSize: 12, color: focused ? '#32c73c' : 'gray'}}>Chat</Text>
            </View>)
          },
        }} />
      <Tab.Screen name="Inbox" component={Inbox} options={{
          tabBarLabel: 'Inbox',
         tabBarIcon: ({ focused }) => {
            const [fontLoaded, setFontLoaded] = useState(false)
            if(!fontLoaded){
              return (
                <AppLoading
                startAsync={loadFonts}
                onFinish={() => {
                setFontLoaded(true);
                }}/>
              )
            }
            return (<View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={focused ?  require('./assets/bottomactive4.png') : require('./assets/bottom4.png')} style={{width: 30, height: 30}}/>
              <Text style={{fontFamily: 'MaisonNeue-Medium', fontSize: 12, color: focused ? '#32c73c' : 'gray'}}>Inbox</Text>
            </View>)
          },
        }} />
      <Tab.Screen name="Account" component={Account} options={{
          tabBarLabel: 'Account',
         tabBarIcon: ({ focused }) => {
            const [fontLoaded, setFontLoaded] = useState(false)
            if(!fontLoaded){
              return (
                <AppLoading
                startAsync={loadFonts}
                onFinish={() => {
                setFontLoaded(true);
                }}/>
              )
            }
            return (<View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={focused ?  require('./assets/bottomactive5.png') : require('./assets/bottom5.png')} style={{width: 30, height: 30}}/>
              <Text style={{fontFamily: 'MaisonNeue-Medium', fontSize: 12, color: focused ? '#32c73c' : 'gray'}}>Account</Text>
            </View>)
          },
        }} />
    </Tab.Navigator>
  );
}

function Orders() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(!fontLoaded){
    return (
      <AppLoading
      startAsync={loadFonts}
      onFinish={() => {
      setFontLoaded(true);
      }}/>
    )
  }
  return (
    <View style={{fontFamily: 'MaisonNeue-Book', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orders menu</Text>
    </View>
  );
}

function Chat() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(!fontLoaded){
    return (
      <AppLoading
      startAsync={loadFonts}
      onFinish={() => {
      setFontLoaded(true);
      }}/>
    )
  }
  return (
    <View style={{fontFamily: 'MaisonNeue-Book', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat menu</Text>
    </View>
  );
}

function Inbox() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(!fontLoaded){
    return (
      <AppLoading
      startAsync={loadFonts}
      onFinish={() => {
      setFontLoaded(true);
      }}/>
    )
  }
  return (
    <View style={{fontFamily: 'MaisonNeue-Book', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inbox menu</Text>
    </View>
  );
}

function Account() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(!fontLoaded){
    return (
      <AppLoading
      startAsync={loadFonts}
      onFinish={() => {
      setFontLoaded(true);
      }}/>
    )
  }
  return (
    <View style={{fontFamily: 'MaisonNeue-Book', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account menu</Text>
    </View>
  );
}

function PickButton({name, active, setActivePicks}) {
  return (
    <TouchableOpacity onPress={() => setActivePicks(name)} style={{ marginLeft: (name === "All") ? 0 : 10, 
    marginRight: (name === "Update") ? 15 : 0, backgroundColor: (active === name) ? '#2aad32' : 'white', borderRadius: 18}}>
      <Text style={{...styles.topPicks,
      color: (active === name) ? 'white' : '#bababa' }}>{name}</Text>
    </TouchableOpacity>
  )
}

function HomeScreen() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [activePicks, setActivePicks] = useState('All')
  const [modalVisible, setModalVisible] = useState(false)

  if(!fontLoaded){
    return (
      <AppLoading
      startAsync={loadFonts}
      onFinish={() => {
      setFontLoaded(true);
      }}/>
    )
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <MoreMenu handleVisible={() => setModalVisible(false)}></MoreMenu>
      </Modal>
    <View style={styles.container}>
      <View style={{width:1000, height:1000, position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2, display: modalVisible ? 'flex' : 'none'}}></View>
      <View style={styles.topBar}>
        <View style={styles.searchBar}>
          <Image source={require('./assets/search.png')} style={{width: 12, height: 12, marginRight: 10}}/>
          <Text style={{fontFamily: 'MaisonNeue-Book', color: '#c2c2c2', fontSize: 18}}>Find food, places, or services</Text>
        </View>
        <View style={styles.promos}>
          <Image source={require('./assets/percent.png')} style={{width: 25, height: 25, marginLeft: 10}}/>
          <Text style={{fontFamily: 'MaisonNeue-Book', color: 'black', fontSize: 12, marginLeft: 5}}>Promos</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.gopay}>
          <View style={styles.gopayHeader}>
            <Image source={require('./assets/gopay.png')} style={{width: 12, height: 12}}/>
            <Text style={{fontFamily: 'MaisonNeue-Bold', color: '#fff', fontSize: 18, marginLeft: 4}}>gopay</Text>
            <Text style={{fontFamily: 'MaisonNeue-Bold', color: '#fff', fontSize: 18, marginLeft: 'auto', marginRight: 15}}>Rp10.000</Text>
          </View>
          <View style={styles.gopayContent}>
            <View style={styles.gopayContent2}>
              {gopayData.map((data, i) => (
                <GopayIcon data={data} key={i} ></GopayIcon>
              ))}
            </View>
          </View>
          <View style={styles.goMenus}>
            <View style={styles.gopayContent2}>
              {menu1.map((data, i) => (
                <MenusIcon data={data} key={i} handlePress={() => {
                  setModalVisible(true);
                }}></MenusIcon>
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
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 22}}>Top picks for you</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
          style={{alignSelf: 'stretch', flexDirection: 'row', padding: 10}}>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="All"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="COVID-19"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Donation"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="eBadah"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Entertaintment"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Food"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Lifestyle"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Payments"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Promos"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Shopping"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Transport"></PickButton>
            <PickButton setActivePicks={(picks) => setActivePicks(picks)} active={activePicks} name="Update"></PickButton>
          </ScrollView>
        </View>
        <View style={{marginTop: 20, paddingBottom: 90}}>
          <Image source={require('./assets/gojeklogo.png')} style={{width: 70, height: 25}}/>
          {(activePicks === "All") ? (
          <View>
            <Covid></Covid>
            <Donation></Donation>
            <Ebadah></Ebadah> 
          </View>) : (<View></View>)}
          {(activePicks === "COVID-19") ? (
          <View>
            <Covid></Covid>
          </View>) : (<View></View>)}
          {(activePicks === "Donation") ? (
          <View>
            <Donation></Donation>
          </View>) : (<View></View>)}
          {(activePicks === "eBadah") ? (
          <View>
            <Ebadah></Ebadah>
          </View>) : (<View></View>)}
          {(activePicks !== "All" && activePicks !== "COVID-19")  && activePicks !== "eBadah" && activePicks !== "Donation"? (
          <View style={{height: 200}}>
            <Text style={{fontFamily: 'MaisonNeue-Bold', fontSize: 18, marginTop: 10}}>{activePicks}</Text>
          </View>) : (<View></View>)}
        </View>
      </ScrollView>
    </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 33,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    paddingBottom: 5
  },
  searchBar: {
    backgroundColor: "#fcfcfc",
    height: 35,
    alignSelf: 'stretch',
    flex: 5,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  promos: {
    backgroundColor: "#f7f7f7",
    height: 35,
    flex: 2,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
  },
  content: {
    alignSelf: 'stretch',
    paddingTop: 15,
    paddingLeft: 17,
    paddingRight: 17,
  },
  gopay: {
    alignSelf: 'stretch',
  },
  gopayHeader: {
    backgroundColor: '#153d94',
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  gopayContent: {
    backgroundColor: '#2f59b5',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  gopayContent2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gopayContent3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  goMenus: {
    marginTop: 15,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  topPicks: {
    fontFamily: 'MaisonNeue-Book',
    color: '#bababa',
    borderWidth: 1,
    borderColor: '#bababa',
    padding: 10,
    paddingHorizontal: 17,
    borderRadius: 18
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
