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

function GenerateRandom1ptTopicsButton({ onGenerateRandom1ptTopics }) {
  return (
    <Button bsStyle="success" onClick={onGenerateRandom1ptTopics}>
      Generate 1pt Topics
    </Button>
  );
}

function GenerateRandom3ptTopicsButton({ onGenerateRandom3ptTopics }) {
  return (
    <Button bsStyle="warning" onClick={onGenerateRandom3ptTopics}>
      Generate 3pt Topics
    </Button>
  );
}

function GenerateRandom5ptTopicsButton({ onGenerateRandom5ptTopics }) {
  return (
    <Button bsStyle="danger" onClick={onGenerateRandom5ptTopics}>
      Generate 5pt Topics
    </Button>
  );
}

export default function SirGame(props) {
  console.log(props);
  return (
    <div>
      <TopicList topicAndValue={props.topicAndValue} />
      <GenerateRandom1ptTopicsButton onGenerateRandom1ptTopics={props.onGenerateRandom1ptTopics} />
      <GenerateRandom3ptTopicsButton onGenerateRandom3ptTopics={props.onGenerateRandom3ptTopics} />
      <GenerateRandom5ptTopicsButton onGenerateRandom5ptTopics={props.onGenerateRandom5ptTopics} />
    </div>
  );
}
