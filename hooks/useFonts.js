import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('../assets/fonts/Lato-BoldItalic.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'supergroteska-rg': require('../assets/fonts/supergroteska-rg.ttf'),
    'BodoniItalic': require('../assets/fonts/BodoniItalic.ttf'),
  });