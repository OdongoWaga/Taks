import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default function UserView({ user, tasks }) {
  const { name, age } = user;
  const tasksCount = tasks.length;
  const tasksCompleted = tasks.filter(task => task.completed).length;
  const tasksNew = tasks.filter(task => !task.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Tasks: {tasksCount}</Text>
      <Text style={styles.text}>Completed: {tasksCompleted}</Text>
      <Text style={styles.text}>New: {tasksNew}</Text>
    </View>
  );
}

UserView.propTypes = {
  user: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
});