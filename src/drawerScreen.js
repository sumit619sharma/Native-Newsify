import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import Common from './common';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

const list = [
    {name: 'Sports', id: 1},
    {name: 'Entertainment', id: 2},
    {name: 'Business', id: 3},
    {name: 'Health', id: 5},
    {name: 'General', id: 6},
];

const CustomDrawerContent = props => {
    const [selectId, setSelectedId] = useState(1);
    // console.log('it was called');

    const RenderItem = ({item}) => {
        // console.log('item  =', item);

        const backgroundColor = item.id === selectId ? 'pink' : 'white';
        return (
            <Item
                item={item}
                backgroundColor={backgroundColor}
                onPress={() => {
                    setSelectedId(item.id), props.navigation.navigate('Newsify', item);
                }}
            />
        );
    };

    const Item = ({item, backgroundColor, onPress}) => {
        return (
            <View style={{borderRadius: 20}}>
                <TouchableOpacity onPress={onPress}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'purple',
                            padding: 5,
                            margin: 10,
                            backgroundColor: backgroundColor,
                            borderRadius: 20,
                        }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0.2}}>
                <Image
                    style={{width: `100%`, height: '100%'}}
                    source={{
                        uri: `https://thumbs.dreamstime.com/z/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg`,
                    }}
                />
            </View>
            <View style={{flex: 0.8, backgroundColor: `grey`}}>
                <FlatList data={list} renderItem={RenderItem}></FlatList>
            </View>
            {/* <View style={{backgroundColor: 'lightgrey', flex: 0.2}}>
                <Text style={{color: 'black', marginLeft: 10, fontSize: 25}}>Setting</Text>
            </View> */}
        </View>
    );
};
const DrawerScreen = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="Newsify"
                component={Common}
                options={({route}) => ({
                    title: route?.params?.name ? route?.params?.name : `Sports`,
                    headerStyle: {backgroundColor: `pink`},
                    headerTintColor: 'purple',
                })}
            />
        </Drawer.Navigator>
    );
};
export default DrawerScreen;
