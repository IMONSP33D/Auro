import { View, Text, Image, StyleSheet } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'

// imports for icons
import { icons } from '../../constants';

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

const CenterIcon = ({ icon, focused }) => {
    return (
        <View className="items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                className="w-13 h-13"
                tintColor={focused ? '#6100ff' : null}
            />
        </View>
    )
}

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabStyles,}}>
        <Tabs.Screen 
            name='home'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabView}>
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
                    <View style={styles.tabView}>
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
                    <View style={{paddingBottom: 20}}>
                        <View style={styles.CenterStyle}>
                            <CenterIcon
                                icon={icons.fire}
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
                    <View style={styles.tabView}>
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
                    <View style={styles.tabView}>
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

const styles = StyleSheet.create({
    tabStyles : {
        position: 'absolute',
        bottom: 27,
        left: 25,
        right: 25,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderStyle: 'solid',
    },
    tabView : {
        alignItems:"center",
        paddingTop:5
    },
})

export default Layout


