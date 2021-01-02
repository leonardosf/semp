import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../views/home';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Button icon="menu" color="black" style={{size:'25px'}}/>
            </TouchableOpacity>
        </View>
    );
}

const Menu = () => {

    function HomeViewStack({ navigation }) {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                        headerTransparent: true,
                        headerTintColor: '#000', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                            fontSize: 20
                        },
                    }}
                />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{ activeTintColor: '#e91e63', itemStyle: { marginVertical: 5 } }}>
                <Drawer.Screen name="Home" options={{ drawerLabel: 'Home' }} component={HomeViewStack} />
            </Drawer.Navigator>
            {/* <Drawer.Section title="Some title">
                <Drawer.Item
                    label="First Item"
                    active={active === 'first'}
                    onPress={() => setActive('first')}
                />
                <Drawer.Item
                    label="Second Item"
                    active={active === 'second'}
                    onPress={() => setActive('second')}
                />
            </Drawer.Section> */}
        </NavigationContainer>
    );
}

export default Menu;