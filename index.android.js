import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';


class app3 extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '', escolhaComputador: '', resultado : '' }
  }

  jokenpo(escolhaUsuario){
    var numAleatório = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch(numAleatório){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate'
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou'
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Computador ganhou'
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhou'
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate'
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou'
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou'
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Computador ganhou'
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate'
      }
    }

    this.setState({ escolhaUsuario : escolhaUsuario ,
                    escolhaComputador : escolhaComputador,
                    resultado : resultado
                  });
  }

  render() {
    return (
      <View>
        <Topo></Topo>

        <View style={styles.painelAcess}>
          <View style={styles.btnEscolha}>
            <Button title = "pedra" onPress = {() => {this.jokenpo('pedra')}} />
          </View>

          <View  style={styles.btnEscolha}>
            <Button title = "papel" onPress = {() => {this.jokenpo('papel')}}/>
          </View>

          <View  style={styles.btnEscolha}>
            <Button title = "tesoura " onPress = {() => {this.jokenpo('tesoura')}}/>
          </View>
        </View>

        <View  style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'></Icone>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }


});

AppRegistry.registerComponent('app3', () => app3);
