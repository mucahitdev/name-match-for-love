import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useRef } from "react";
import { Stack, useLocalSearchParams, router } from "expo-router";
import getCompatibilityResult from "src/utils/getCompatibilityResult";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

export default function Result() {
  const { resultValue, firstName, secondName } = useLocalSearchParams() as any;
  const viewImage = useRef(null);

  const { title, description } = getCompatibilityResult(Number(resultValue));

  const snapshot = async () => {
    try {
      const uri = await captureRef(viewImage, {
        format: "png",
        quality: 1,
        fileName: `${firstName}-${secondName}.png`,
      });

      const options = {
        mimeType: "image/png",
        dialogTitle: "Aşk ile Paylaş",
      };

      await Sharing.shareAsync(uri, options);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSnapShot = () => {
    snapshot().catch((error) => {
      console.error("Snapshot hatası:", error);
    });
  };

  const isDescription = true;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title,
          headerTitleStyle: {
            fontSize: 20,
            color: Number(resultValue) > 50 ? "green" : "red",
          },
        }}
      />
      <Text style={styles.title}>{resultValue}</Text>
      <View ref={viewImage} collapsable={false} style={{ backgroundColor: "#fff" }}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/images/heart3d.jpg")}
          style={styles.image}
        >
          <View style={styles.heartArea}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>{firstName}</Text>
              <Text style={styles.text}>{secondName}</Text>
            </View>
            <Text style={styles.resultHeart}>{resultValue}</Text>
          </View>
        </ImageBackground>
        {isDescription && (
          <View style={{ paddingHorizontal: 16 }}>
            <Text style={styles.description}>{description}</Text>
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "auto",
          paddingVertical: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Geri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSnapShot();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>Paylaş</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 16,
  },
  image: {
    height: 300,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  heartArea: {
    height: 200,
    width: 200,
    flexDirection: "column",
    paddingTop: 50,
    gap: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  resultHeart: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
