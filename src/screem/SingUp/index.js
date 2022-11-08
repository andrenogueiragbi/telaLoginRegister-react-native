import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity,
    ActivityIndicator, 
    Linking,
    Alert

} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'



import Imput from '../../components/Imput';
import { theme } from '../../themes'
const termoUrl = 'https://facisc.org.br/wp-content/uploads/2020/06/Termo-de-Aceite.pdf'

export default () => {
    const navigation = useNavigation()

    const [visible, setVisible] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setChecked] = useState(false);
    const [loadingIcon, setLoadingIcon] = useState(true)
    const [openTermo, setOpenTermo] = useState(false)
    const [dataNull, setDataNull] = useState(false)
    const [butttonAcitive, setButtonActive] = useState(true)
    const [focusEmial, setfocusEmial] = useState(false)
    const [focusPassowd, setfocusPassowd] = useState(false)
    const [focusName, setfocusName] = useState(false)


    const handerFocusEmail = () =>{
        setfocusEmial(true)
        setfocusPassowd(false)
        setfocusName(false)

    }
    const handerFocusPassword = () =>{
        setfocusPassowd(true)
        setfocusEmial(false)
        setfocusName(false)
             
    }
    const handerFocusName = () =>{
        setfocusName(true)
        setfocusPassowd(false)
        setfocusEmial(false)
             
    }

    const openAceiteTermo = () =>{
        setOpenTermo(true)
        Linking.openURL(termoUrl)
    }

    const handerSignIn = () =>{
        if(!openTermo){
            return Alert.alert(
                "Opas!!!🙈:",
                "É necessário abrir e ler o termo de uso antes de seguir!",
                [
                    {
                        text: "Abrir",
                        onPress: () => {
                            openAceiteTermo()
                           
                        },
                    },
                    { text: "cancelar",  style: "cancel" }

                ]
            );

        }

    }


    

    useEffect(()=>{
        if(name && email && password && isChecked  ){
            setButtonActive(false)

        }else{
            setButtonActive(true)

        }

    },[name,email,password,isChecked])




    useEffect(() => {

        setTimeout(() => {
            setLoadingIcon(false)

        }, 3000)

    }, [])



    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.textWelcome}>Faça seu cadastro</Text>

            <Imput
                placeholder='Digite seu nome'
                placeholderColor={theme.COLOR.TEXTPLACE}
                icon='ios-close-circle'
                value={name}
                changeValue={setName}
                colorIcon={theme.COLOR.BUTTON}
                focus={focusName}
                handerFocus={handerFocusName}
       
                
            />

            <Imput
                placeholder='Digite o email'
                placeholderColor={theme.COLOR.TEXTPLACE}
                icon='ios-close-circle'
                value={email}
                changeValue={setEmail}
                typeData='email-address'
                colorIcon={theme.COLOR.BUTTON}
                focus={focusEmial}
                handerFocus={handerFocusEmail}
       
                
            />
            <Imput
                placeholder='Digite a senha'
                placeholderColor={theme.COLOR.TEXTPLACE}
                secureText={true}
                visible={visible}
                setVisible={setVisible}
                value={password}
                changeValue={setPassword}
                colorIcon={theme.COLOR.BUTTON}
                focus={focusPassowd}
                handerFocus={handerFocusPassword}
     
                
            />

            <ActivityIndicator animating={loadingIcon} style={styles.loadingIcon} size='large' color={theme.COLOR.BUTTON} />


            <View style={styles.section}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={() => setChecked(!isChecked)}
                    color={isChecked ? '#495ABF' : undefined}
                />

                <View style={styles.containerTermo}>
                    <Text>Li e concordo com os </Text>

                    <TouchableOpacity
                        onPress={openAceiteTermo}

                    >
                        <Text style={styles.buttonTerm}>Termos e uso Politicas de Privacidade</Text>
                    </TouchableOpacity>
                </View>

            </View>


            <TouchableOpacity
                style={[styles.buttonsingIn, !butttonAcitive? {backgroundColor:theme.COLOR.BORDERCOLOR}:false]}
                onPress={handerSignIn}
                disabled={butttonAcitive}

            >

                <Text style={styles.textTuttonsingIn} >Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSingInCel} 
                onPress={()=> navigation.navigate('SingIn')}
            
            >
                <Text style={styles.textButtonSingInCel} >Já tenho Cadastro!</Text>
            </TouchableOpacity>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLOR.BACKGROUND_PRIMARY,
        padding: 15,
        marginTop: 30,
        alignItems: 'center',
        justifyContent:'center'
    },
    textWelcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'flex-start'

    },
    areaButtonText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    textRegister: {
        color: theme.COLOR.TEXT,
    },
    textSingIn: {
        color: theme.COLOR.TEXT,
        fontWeight: 'bold'
    },
    textForgetPassword: {
        color: theme.COLOR.TEXT
    },
    buttonsingIn: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        backgroundColor: theme.COLOR.BUTTON,
        justifyContent: 'center',
        borderRadius: 30

    },
    textTuttonsingIn: {
        fontWeight: 'bold',
        fontSize: 18,
        color: theme.COLOR.BACKGROUND
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    
        marginBottom: 20
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    buttonSingInCel: {
        width: '100%',
        height: 50,
        borderWidth: 0.1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    textButtonSingInCel: {
        color: theme.COLOR.TEXT,
    },
    textOuterLogin: {
        paddingTop: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 20,
        fontSize: 10,

    },
    ButtonIconFace: {
        width: 80,
        height: 80,
        alignItems: 'center',
        backgroundColor: '#495ABF',
        justifyContent: 'center',
        borderRadius: 40
    },
    areaIconFace: {
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonTerm: {
        color: theme.COLOR.BORDERCOLOR,


    },


})