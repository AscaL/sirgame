import React, { Component } from 'react';
import SirGame from '../components/SirGame';
import _ from 'lodash';

export default class SirGameContainer extends Component {
  constructor() {
    super();
    this.generateRandomTopics = this.generateRandomTopics.bind(this);
    this.handleGenerateRandom1ptTopics = this.handleGenerateRandom1ptTopics.bind(this);
    this.handleGenerateRandom3ptTopics = this.handleGenerateRandom3ptTopics.bind(this);
    this.handleGenerateRandom5ptTopics = this.handleGenerateRandom5ptTopics.bind(this);

    const topicAndValue = [
      { name: 'Maggiolone', value: 1 },
      { name: 'Giurisprudenza', value: 1 },
      { name: 'Donna', value: 1 },
      { name: 'Kick-Boxing', value: 1 },
      { name: 'And Yet', value: 1 },
      { name: 'Like a Sir', value: 1 },
      { name: 'Whisky', value: 1 },
      { name: 'Fotografia', value: 1 },
      { name: 'Mettere Pace', value: 1 },
      { name: 'Amumu', value: 1 },
      { name: "Rapporto con l'erba", value: 1 },
      { name: 'Formula 1', value: 3 },
      { name: 'NBA', value: 3 },
      { name: 'MotoGP', value: 3 },
      { name: 'M5S', value: 3 },
      { name: 'Match History', value: 3 },
      { name: 'Queen Makeda', value: 3 },
      { name: 'Dito Insaccato', value: 3 },
      { name: 'Chiusa LotR', value: 3 },
      { name: "Fermacravatta d'argento", value: 5 },
      { name: 'Papillon di Legno', value: 5 },
      { name: 'Random Teaching', value: 5 },
      { name: 'Servizio Clienti Sapienza', value: 5 },
    ];
    console.log(topicAndValue);

    this.state = {
      topicAndValue,
      numberOfPlayers: 4,
    };
  }

  generateRandomTopics(topics, value) {
    const valuePointTopics = _.filter(this.state.topicAndValue, { value });
    const pointTopicsWithoutValue = _.map(valuePointTopics, elem => _.omit(elem, 'value'));
    const randomValuePointTopics = _.sampleSize(
      pointTopicsWithoutValue,
      this.state.numberOfPlayers
    );
    console.log(randomValuePointTopics);
    return randomValuePointTopics;
  }

  handleGenerateRandom1ptTopics() {
    const randomOnePointTopics = this.generateRandomTopics(this.state.topicAndValue, 1);
    return randomOnePointTopics;
  }

  handleGenerateRandom3ptTopics() {
    const randomThreePointTopics = this.generateRandomTopics(this.state.topicAndValue, 3);
    return randomThreePointTopics;
  }

  handleGenerateRandom5ptTopics() {
    const randomFivePointTopics = this.generateRandomTopics(this.state.topicAndValue, 5);
    return randomFivePointTopics;
  }

  render() {
    return (
      <SirGame
        topicAndValue={this.state.topicAndValue}
        onGenerateRandom1ptTopics={this.handleGenerateRandom1ptTopics}
        onGenerateRandom3ptTopics={this.handleGenerateRandom3ptTopics}
        onGenerateRandom5ptTopics={this.handleGenerateRandom5ptTopics}
      />
    );
  }
}
