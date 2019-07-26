import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useUserReducer, useTaskReducer } from './src/reducer';

import Modal from './src/components/Modal';
import UserView from './src/components/UserView';
import TaskList from './src/components/TaskList';
import TaskForm from './src/components/TaskForm';

export default function App() {
  const { getUser, createUser } = useUserReducer();
  const { getTaskList, addTask, deleteTask, changeState } = useTaskReducer();

  const user = getUser(1);
  const tasks = getTaskList();

  if (!user) return <Modal createUser={createUser} />;

  return (
    <View style={styles.container}>
      <UserView user={user} tasks={tasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} changeState={changeState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
});