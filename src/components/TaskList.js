import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';

import Task from './Task';

export default function TaskList({ tasks, deleteTask, changeState }) {
  return (
    <Container style={styles.container}>
      <Content>
        <List>
          {tasks.map(({ id, name, completed }) => (
            <Task
              key={id}
              id={id}
              name={name}
              completed={completed}
              deleteTask={deleteTask}
              changeState={changeState}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
}

TaskList.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});