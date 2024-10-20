import AppNavigator from "./navigation/AppNavigator";
import { colors } from "./theme/colors";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 0 }}>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <AppNavigator />
    </View>
  );
}
