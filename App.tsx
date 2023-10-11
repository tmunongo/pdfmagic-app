import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, useWindowDimensions } from "react-native";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import BottomTabs from "./src/navigators/BottomTabs";

const source = {
  uri: "https://samples.leanpub.com/thereactnativebook-sample.pdf",
  cache: true,
};

const queryClient = new QueryClient();

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <NavigationContainer>
            <BottomTabs />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
