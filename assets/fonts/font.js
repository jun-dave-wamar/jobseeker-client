import { useFonts } from "expo-font";

export default function useCustomFonts(){
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../fonts/Poppins-Regular.ttf'),
        'Poppins-Light': require('../fonts/Poppins-Light.ttf'),
    })
    return fontsLoaded;
}