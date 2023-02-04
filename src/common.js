import {Dimensions, Image, StyleSheet, Text, FlatList, View, Button, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useEffect, useState,useRef} from 'react';
import Pinchable from 'react-native-pinchable';

export default function Common({navigation, route}) {
    const x = route?.params?.name ? route?.params?.name : 'sports';
   
    const flatRef = useRef();
    const [category, setCategory] = useState([]);

    const fetchuser = async () => {
        //console.log('x = ==', x);
        //console.log('cnt=', cnt + 1);
        const ur = `https://newsapi.org/v2/top-headlines?country=in&category=${x}&apiKey=b22cd191aa294197abc39d543ea31002`;
        //console.log(ur);
        const resp = await fetch(ur);
        //  console.log('resp=== ', resp);
        const respJson = await resp.json();
         //console.log('respJson=== ', respJson);
        const respArray = await respJson.articles;
        setCategory(respArray);
        flatRef.current.scrollToIndex({index: 0});     
       // console.log("cat=" , respArray);
    };

    useEffect(() => {
        fetchuser();
    }, [x]);

    // console.log('category = ', route?.params?.name, category);

    return (
        <View style={{flex: 1,alignItems: `center`, backgroundColor: `lightgrey`}}>
            {/* <SafeAreaProvider> */}

            <FlatList
        ref={flatRef}
            keyExtractor={item => item.id}
                data={category}
                renderItem={({item}) => (
                    <View style={style.cardContainer}>
                        <Pinchable>
                            <Image
                                style={style.cardImage}
                                source={{
                                    uri: item?.urlToImage
                                        ? item?.urlToImage
                                        : 'https://cdn.pixabay.com/photo/2014/08/07/21/13/newspaper-412811_960_720.jpg',
                                }}
                            />
                        </Pinchable>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                // stack navigation
                                navigation.navigate('web', {
                                    url: item.url,
                                });
                            }}>
                            <View style={{marginVertical: 7, borderRadius: 10, }}>
                                <Text style={{marginLeft: 10, color: 'red', fontSize: 18}}>Title:</Text>
                                <Text  numberOfLines={2} style={{marginLeft: 10, color: 'black', }}>{item?.title} </Text>

                                <Text style={{marginLeft: 10, color: 'red', fontSize: 18}}>Discription:</Text>
                                <Text  numberOfLines={2} style={{marginLeft: 10, color: 'black'}}>{item?.description} </Text>

                                <Text style={{marginLeft: 10, color: 'red', fontSize: 14}}>Author:</Text>
                                <Text style={{marginLeft: 10, color: 'black'}}>
                                    {item?.author !== null ? item?.author : 'Not Found'}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                )}
                // keyExtractor={item => item.id}
            />
            {/* </SafeAreaProvider> */}
        </View>
    );
}
const style = StyleSheet.create({
    cardContainer: {
        width: `90%`,
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        padding: 5,
        borderRadius: 20,
        backgroundColor: `white`,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 10
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderRadius: 20,
        padding: 5
        
    },
});
