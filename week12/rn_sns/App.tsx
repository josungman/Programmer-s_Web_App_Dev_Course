import {NavigationContainer} from '@react-navigation/native';
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
