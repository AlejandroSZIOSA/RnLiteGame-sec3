//reusable cod  = a Box = a Card 
import { StyleSheet,View } from "react-native";
import Colors from "../../constants/color";
// wraper = enboltorio en cualquier contenido
//children = prop
function Card ({children}){
    return <View style= {styles.card}>{children}</View>
}
export default Card;

const styles = StyleSheet.create({
    card:{
        //flex: 1,
        justifyContent:'center', //flex properties top to bottom axes
        alignItems:'center',      //flex properties oposite main axes
        marginTop:36, // margin top
        marginHorizontal:24, // left / right
        padding: 16,
        backgroundColor:Colors.primary800,
        borderRadius: 8,
        elevation: 4, // shadows on ANDROID
        shadowColor: 'black', // shadows on IOS
        shadowOffset:{width: 0, height: 2 }, // shadows on IOS
        shadowOpacity:6, // shadows on IOS
        shadowOpacity: 0.25 // shadows on IOS
    },
});