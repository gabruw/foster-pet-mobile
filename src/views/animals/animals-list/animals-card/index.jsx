import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React from 'react';


const AnimalCard = () => (
    <Card>
    <Card.Title h3='true' >Cachorros</Card.Title>
    <Card.Divider/>
    <Text style={{marginBottom: 10}}>
        Nome: Gabriel DOG
    </Text>
    <Text style={{marginBottom: 10}}>
        Idade: 6 anos
    </Text>
    <Text style={{marginBottom: 10}}>
        Raça: Vira Lata
    </Text>
    <Card.Image source={require('./cachorroTeste.jpeg')}></Card.Image>
    <Button
        icon={<Icon name='pets' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='  Obter Informações' />
  </Card>
);

export default AnimalCard;
