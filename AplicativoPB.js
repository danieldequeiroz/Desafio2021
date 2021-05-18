import * as React from 'react';
import { View, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Usuarioweb from './src/app/usuarios-pb/usuarios/Usuarioweb'
import DetalhePB from './src/app/usuarios-pb/usuarios/paginaweb/DetalhePB'
import { createStackNavigator } from '@react-navigation/stack';

import axios from 'axios';
import ItenPB from './src/component/ItenPB'
export default class App extends React.Component{
}


// Aqui é a constante do nosso aplicativo para o desfio Sisenex Drawer = createDrawerNavigator(); que será importante para a implementação do código.   Feito por Daniel Queiroz
const Drawer = createStackNavigator();
function AplicativoPB() {
  return (
    <View style={styles.container}>
        <NavigationContainer >
          <Drawer.Navigator initialRouteName="Usuarioweb">
            <Drawer.Screen name="Lista de Pessoas" component={Usuarioweb} />
            <Drawer.Screen name="Detalhe da Pessoa" component={DetalhePB} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default AplicativoPB;
 // constructor(props){
 //   super(props);
  //  this.state = {
  //    peoples: []
//}
//  }

  //componentDidMount(){
 //   axios
   // .get('https://randomuser.me/api/?nat=br&results=5')
   // .then(response => {
   //   const {results} = response.data
    //  this.setState({
    //    peoples: results
   //   })
  //  })
 // }

 // render(){
  //  return (
   ///   <View>
   //     <ItenPB peoples={this.state.peoples} />
   //   </View>
  //  );
 // }

//}
