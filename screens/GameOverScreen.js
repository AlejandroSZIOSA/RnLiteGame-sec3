import {View,Image,StyleSheet,Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
// revisar :)
// adding summary props info 
function GameOverScreen({myRoundsNumber,myUserNumber,onStartNewGame}){
    return( 
    <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imagecontainer}>
            <Image 
                style={styles.image}
                source={require('../assets/images/success.png')}/>
        </View>
        {/* Nested text is allowed in RN and can use Styles */}
        <Text style={styles.sumaryText}>
            Your phone needed <Text style={styles.highlight}>{myRoundsNumber}</Text> rounds 
            to guess the number
            <Text style={styles.highlight}>{myUserNumber}</Text>. 
        </Text>
        <PrimaryButton myOnPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View> 
    )
}
export default GameOverScreen;

const styles= StyleSheet.create({
    // It moves everyting to the center of the screen :)
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent:'center',
        alignItems:'center'
    },
    imagecontainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow:'hidden', // a mask
        margin:36
    },
    image:{
        width:'100%', // Image properties
        height:'100%'
    },
    //Text properties
    sumaryText: {
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24 // set margin between all elements :)
        
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    },

})