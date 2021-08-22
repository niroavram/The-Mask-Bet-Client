import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button
} from 'react-native';
import { COLORS,SIZES } from '../../constants';
import styles from "./styles"
import Group from './components/group';
import Smiley from './components/smiley';
import Logo from '../../components/Logo';
import Background from '../../components/Background';
import Hello from '../newOne/hello';
const Home = ({navigation}) =>{
    const [myGroups,setMyGroups] =useState([{name:'Maccabi',id:1},{name:'Killers',id:2},{name:'Zehavi',id:3},{name:'Haifa',id:4}])
    const [displayJoin, setDisplayJoin] = React.useState(false);
    const joinPage = () =>{
        setDisplayJoin(true)
        
     }
    return (
        <Background style={styles.container}>
          
            <Smiley navigation={navigation} joinPage={joinPage} />
            <View style={styles.groupContainer}>
            <Text style={{fontSize: SIZES.h1}}>My Groups</Text>
            
            <FlatList 
            numColumns={2}
            keyExtractor={(item)=>item.id}
            data={myGroups}
            renderItem={({item})=>(
                <Group item={item}/>
            )}
            />
            </View>
           </Background>
    )
}

export default Home;