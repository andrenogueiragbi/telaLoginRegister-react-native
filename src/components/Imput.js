import React,{useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { theme } from '../themes';
import { Ionicons } from '@expo/vector-icons';

export default ({focus,handerFocus ,placeholder, placeholderColor, secureText, icon, visible, setVisible, value,changeValue,typeData,colorIcon },props) => {



    return (
        <View style={[styles.container,focus? styles.focusActive: styles.focusInative]} >
            <TextInput
                style={styles.textImput}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor ? placeholderColor : '#212121'}
                secureTextEntry={visible}
                value={value}
                onChangeText={(t)=> changeValue(t)}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={typeData? typeData: 'default'}
                onFocus={handerFocus}
    
            />
            {secureText ?

                (
                    <TouchableOpacity style={styles.icon} 
                        onPress={() =>{setVisible(!visible)}}
                    
                    >
                        <Ionicons name={visible ? 'ios-eye' : 'ios-eye-off'} size={24} color={colorIcon?colorIcon:'black'} />
                    </TouchableOpacity>
                )

                :
                (
                    <TouchableOpacity style={styles.icon} 
                        onPress={()=>{changeValue(null)}}
                    
                    >
                        <Ionicons name={icon} size={24} color={colorIcon?colorIcon:'black'} />
                    </TouchableOpacity>
                )

            }



        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingLeft: 15,
        borderWidth: 1.2,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    focusInative:{
        borderColor: theme.COLOR.BUTTON,
    },
    focusActive:{
        borderColor: theme.COLOR.BORDERCOLOR,
    },


    textImput: {
        flex:1,
        marginStart: 10,
        justifyContent:'center',
        color: theme.COLOR.TEXT,
        fontSize:16
        
    },
    icon: {
        width:40,
        height:40,
        position:   'absolute',
        left:     '93%',
        alignItems: 'center',
        justifyContent: 'center',




    }
})