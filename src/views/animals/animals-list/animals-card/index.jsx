import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React from 'react';


const AnimalCard = (props) => (
    <Card>
        <Card.Title> {props.title} </Card.Title>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>Nome: {props.nome}</Text>
        <Text style={{marginBottom: 10}}>Idade: {props.idade}</Text>
        <Text style={{marginBottom: 10}}>Raca: {props.raca}</Text>

        <Card.Image source={props.imagemAnimal}/>
        <Button
            icon={<Icon name='pets' color='#ffffff' />}
            buttonStyle={{borderRadius: 3, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='  Obter Informações'
        />
  </Card>
);

export default AnimalCard;
