import {NavigationContainer} from '@react-navigation/native';
import AnimateExample from './src/pages/AnimateExample';
import ChatScreen from './src/pages/ChatScreen';
import 'react-native-gesture-handler';
import Router from './src/router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
