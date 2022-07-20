
import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView,FlatList,StyleSheet,Image} from 'react-native';
import actions from '../redux/actions';


const HomeScreen = () => {
    const [listItems, setListItems] = useState([]);
 
    useEffect(() => {
        getData();
    }, [])
  
  
    const getData = async () => {
        try {
            const res = await actions.getusers();
             console.log("home=====>",res)
             setListItems(res.data)
            // setcategory(res.data.category);
        } catch (error) {
            console.log("error raised")
        }
  
  
  
    }

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={styles.MainView}>
       <View style={{width:100,height:100}}>
        <Image
        source={{uri:item.avatar}}
        alt="rpsc logo"
        style={{width:100,height:80}}
        />
       </View>
       <View>
        <Text>{item.email}</Text>
        <Text>{item.first_name}</Text>
        
       </View>
      </View>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };
 
  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + ' Value: ' + item.value);
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <FlatList
        data={listItems}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  </SafeAreaView>
  );
};
 
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    //   backgroundColor:'red'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    MainView:{
        flexDirection:'row',
        // backgroundColor:'blue'
    }
  });