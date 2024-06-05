import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

// imports for icons
import { icons } from '../../constants';

const background = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }

const container = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  }


const TabIcon = ({ icon, name, focused }) => {
    return (
        <View className="items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={focused ? '#6100ff' : '#000000'}
                className="w-7 h-7"
            />
            <Text className={`${focused ? 'text-purple' : 'text-black'} font-semibold text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const CenterIcon = ({ icon, name, focused }) => {
    return (
        <View className="items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                className="w-14 h-14"
            />
        </View>
    )
}

const CenterStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 999,
    borderStyle: 'solid',
    borderWidth: 6,
    borderColor: (
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      ),
    backgroundColor: '#151B25',
};

const Test = {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 999,
    borderStyle: 'solid',
    borderWidth: 6,
    // backgroundColor: '#151B25',
    paddingBottom: 100
};

const tabStyles = {
    position: 'absolute',
    bottom: 27,
    left: 25,
    right: 25,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderStyle: 'solid',
};

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: tabStyles,}}>
        <Tabs.Screen 
            name='home'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:"center",paddingTop:5}}>
                        <TabIcon
                            icon={icons.home}
                            name="Home"
                            focused={focused}
                        />
                    </View>
                )
            }} />
            <Tabs.Screen 
            name='stats'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:"center",paddingTop:5}}>
                        <TabIcon
                            icon={icons.stats}
                            name="Stats"
                            focused={focused}
                        />
                    </View>
                )
            }} />
            <Tabs.Screen 
            name='heatr'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={Test}>
                        
                        {/* Put the style back here */}
                        <View>
                            <CenterIcon
                                icon={icons.fire}
                                name="Heatr"
                                focused={focused}
                            />
                        </View>
                    </View>
                )
            }} /> 
            <Tabs.Screen 
            name='clubs'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:"center",paddingTop:5}}>
                        <TabIcon
                            icon={icons.club}
                            name="Clubs"
                            focused={focused}
                        />
                    </View>
                )
            }} />
            <Tabs.Screen 
            name='profile'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:"center",paddingTop:5}}>
                        <TabIcon
                            icon={icons.profile}
                            name="Profile"
                            focused={focused}
                        />
                    </View>
                )
            }} />
    </Tabs>
  )
}

export default Layout


