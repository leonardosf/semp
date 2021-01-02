import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {

    return (
        <View style={styles.container}>
            <Text>teste home!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export default Home;