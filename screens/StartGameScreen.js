import { useState } from "react";
import { TextInput,View,StyleSheet,Alert } from "react-native";
import Colors from "../constants/color";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import IntructionText from "../components/ui/IntructionText";

function StartGameScreen({onPickNumber}){
    //hooks
    const [enteredNumber,setEnteredNumber] = useState('');
    //function
    //get the TextInput as parameter automatic
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        //convert the entries to number
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            //show alert!
        Alert.alert(
            'Invalid number',
            'Number has to be a number between 1 and 99.',
            [{text:'Okay',style:'destructive', onPress: resetInputHandler }] 
            )
            return; // cancell all function
        }
       onPickNumber(chosenNumber);
    }

    return( 
    <View style={styles.rootContainer}>
        <Title>Guess my number</Title>
        <Card>
            {/* keyboardtype cross plataform work on Android and IOS */}
            <IntructionText> Enter a number </IntructionText>
                <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton myOnPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton myOnPress={confirmInputHandler}>Confirme</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop:100,
        alignItems: 'center' // strech = defaults
    },
    numberInput:{
        height: 50,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.acent500, // TextInput Property
        borderBottomWidth: 3,// TextInput Property
        color:Colors.acent500,
        marginVertical: 8, 
        fontWeight: 'bold', // TextInput Property
        textAlign:'center' // TextInput Property
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1
    }
})