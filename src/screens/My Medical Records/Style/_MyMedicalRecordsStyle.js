import {theme} from "../../../constants"
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import {StyleSheet} from "react-native"
const height=hp('100%')
const width=wp('100%')

export const Styles =StyleSheet.create({
mainContainer:{
    backgroundColor:theme.colors.background,
    flex:1,
},


heartContainer:{
    flex:0,
    height:hp('30%'),
    justifyContent:"flex-end",
    alignItems:"center"
},

heart:{
    resizeMode:"contain",
    height:wp('40%'),
    width:wp('40%')
},

text:{
    fontFamily:"OpenSans-Regular",
    fontSize:wp('4.5%')
},
floatingButton:{
    flex:0,
    height:hp('70%'),
    justifyContent:"center",
    alignItems:"flex-end"
},
addButtonContainer:{
    flex:0,
    height:hp('60%'),
    margin:wp('5%'),
    marginBottom:61,
    justifyContent:"flex-end",
    alignItems:"flex-end",
    position: 'absolute',
    right: 10,
    bottom: 10
},
button:{
    borderRadius:100,
    width:73,
    height:73,
    backgroundColor:theme.colors.white,
    borderColor:theme.colors.white,
    elevation:4,
},

})