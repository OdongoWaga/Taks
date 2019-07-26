import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Alert, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ListItem, Icon, Button } from 'native-base';

export default function Task({ id, name, completed, changeState, deleteTask }) {
  const handleDelete = () => {
    Alert.alert(
      'Delete task',
      `Do you want delete ${name}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Delete', onPress: () => deleteTask(id) },
      ],
      { cancelable: false }
    );
  };

  return (
    <ListItem style={styles.task}>
      <CheckBox size={40} checked={completed} onPress={() => changeState(id)} />
      <Text style={styles.text}>{name}</Text>
      <Button style={styles.iconRemove} onPress={() => handleDelete()}>
        <Icon iconRight name="ios-trash" style={{ fontSize: 35, color: 'red' }} />
      </Button>
    </ListItem>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  changeState: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  task: {
    width: 300,
  },
  text: {
    fontSize: 25,
  },
  iconRemove: {
    backgroundColor: 'transparent',
    marginLeft: 'auto',
  },
});