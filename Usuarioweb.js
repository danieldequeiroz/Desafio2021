import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PBusuario from './PBusuario'



export default class Usuarioweb extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 //iremos ver o component
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=10')
    .then(response => {
      const {results} = response.data
      this.setState({
        peoples: results
      })
    })
  }

  render(){
    return (
        <View>
            <PBusuario peoples={this.state.peoples}
            onPressItem={() => {
              this.props.navigation.navigate('Detalhe da Pessoa')
              }} />
        </View>
    );
  }

}
