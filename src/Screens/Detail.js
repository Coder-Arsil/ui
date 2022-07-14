import React, {useState} from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity  } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = (props) => {

const [before, after] = useState("#E2443B");
const runColor1 = () =>{
  return(
   after('#E2443B')
  )
}
const runColor2 = () =>{
  return(
   after('#529C00')
  )
}
const runColor3 = () =>{
  return(
   after('#529CC0')
  )
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#FFF" size={25} />
      </View>
      <Image source={require("../img/2.png")} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Colors</Text>

  
            <Text onPress={runColor1}><View style={styles.c1} /></Text>
     
            <Text onPress={runColor2} style={{marginHorizontal:5}}><View style={styles.c2} /></Text>
          
            <Text onPress={runColor3}><View style={styles.c3} /></Text>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectutur adipsing elit, sed do eiusmod
          tempor inciduent ut labore et dolore magna
        </Text>
        <View style={styles.cont1}>
          <FontAwesome name="heart-o" color="#000" size={25} />
          <TouchableOpacity
            style={[styles.btn, {backgroundColor:before}]}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={[styles.btnText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
    color: "#474747",
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    paddingRight: 80,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: "#E2443B",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: "#529CC0",
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor:'#529C00',
    marginHorizontal:10
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: "#E2443B",
  },
  selected: {
    borderColor: "#E2443B",
    height: 30,
    width: 30,
    borderRadius: 0,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: "45%",
    width: "50%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderTopEndRadius:50,
    borderTopStartRadius:50,
    paddingHorizontal: 20,
  },
});

export default Detail;