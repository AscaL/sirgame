import React from 'react';
import { Button, Table } from 'react-bootstrap';

function generateTopicList(topicAndValue) {
  const topicAndValueTable = topicAndValue.map(topic => (
    <tr>
      <td>
        {topic.name}
      </td>
      <td>
        {topic.value}
      </td>
    </tr>
  ));
  return topicAndValueTable;
}

function TopicList({ topicAndValue }) {
  const topicAndValueTable = generateTopicList(topicAndValue);
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {topicAndValueTable}
      </tbody>
    </Table>
  );
}

function GenerateRandom1ptTopicsButton({ onGenerateRandom1ptTopics, onePointTopics }) {
  console.log('one pt topics', onePointTopics);
  const displayTopics = onePointTopics.map(topic => <li> {topic.name} </li>);
  console.log('display:', displayTopics);
  return (
    <div>
      <Button bsStyle="success" onClick={onGenerateRandom1ptTopics}>
        Generate 1pt Topics
      </Button>
      {displayTopics}
    </div>
  );
}

function GenerateRandom3ptTopicsButton({ onGenerateRandom3ptTopics, threePointTopics }) {
  const displayTopics = threePointTopics.map(topic => <li> {topic.name} </li>);
  return (
    <div>
      <Button bsStyle="warning" onClick={onGenerateRandom3ptTopics}>
        Generate 3pt Topics
      </Button>
      {displayTopics}
    </div>
  );
}

function GenerateRandom5ptTopicsButton({ onGenerateRandom5ptTopics, fivePointTopics }) {
  const displayTopics = fivePointTopics.map(topic => <li> {topic.name} </li>);
  return (
    <div>
      <Button bsStyle="danger" onClick={onGenerateRandom5ptTopics}>
        Generate 5pt Topics
      </Button>
      {displayTopics}
    </div>
  );
}

export default function SirGame(props) {
  console.log('props:', props);
  return (
    <div>
      <TopicList topicAndValue={props.topicAndValue} />
      <GenerateRandom1ptTopicsButton
        onGenerateRandom1ptTopics={props.onGenerateRandom1ptTopics}
        onePointTopics={props.onePointTopics}
      />
      <GenerateRandom3ptTopicsButton
        onGenerateRandom3ptTopics={props.onGenerateRandom3ptTopics}
        threePointTopics={props.threePointTopics}
      />
      <GenerateRandom5ptTopicsButton
        onGenerateRandom5ptTopics={props.onGenerateRandom5ptTopics}
        fivePointTopics={props.fivePointTopics}
      />
    </div>
  );
}
