import { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  return (
    <View style={{ backgroundColor: "#3b3a3a" }}>
      <Text style={{ color: "#c9c7c7" }} numberOfLines={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      </Text>

      <Image
        /*Remote image (another server)*/
        source={{ uri: "https://chaicode.com/assets/white-1-CYshgcRl.webp" }}
        width={200}
        height={200}

        /*Local image*/
      />

      <Image
        /*Local Image*/
        source={require("@/assets/images/icon.png")}
        style={{
          marginTop: 20,
          width: 100,
          height: 100,
        }}
        blurRadius={10}
      />

      <TextInput
        value={name}
        onChangeText={setName}
        style={{
          backgroundColor: "#fff",
          height: 50,
          borderWidth: 2,
          borderColor: "#e6c44c",
          marginTop: 20,
          fontSize: 20,
        }}
        placeholder="Enter your name"
        placeholderTextColor={"#8e62d1"}
      ></TextInput>

      <Pressable
        hitSlop={{
          /*Define additional distance where trigger the component on which it is defined*/
          top: 20,
          bottom: 20,
          right: 10,
          left: 10,
        }}
        onPress={() => alert("pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#fe4848" : "#4bb1dd",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {/* <Text style={{ color: "#393936" }}>Press me!!!</Text> */}
        {({ pressed }) =>
          pressed ? <Text>pressing... </Text> : <Text>press me</Text>
        }
      </Pressable>
    </View>
  );
}
