import React, { Component } from "react";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


class CardAnimal extends Component {
  render() {
    return (
      <section>
        <ScrollView>

            <Card>
            <CardImage
                source={{uri: this.props.uri}}
                title={this.props.animalName}
            />
            <CardTitle
                subtitle={this.props.animalAge}
            />
            <CardContent text={this.props.gender} />
            <CardAction
                separator={true}
                inColumn={false}>
                <CardButton
                onPress={() => {}}
                title="Mais informações"
                color="#FEB557"
                />
            </CardAction>
            </Card>

            </ScrollView>
      </section>
    );
  }
}

export default CardAnimal;
