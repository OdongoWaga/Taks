import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Text, Button } from 'native-base';

export default function TaskInput({ addTask }) {
  const [name, changeName] = useState('');

  const onButtonClick = () => {
    addTask({ id: Date.now(), name, completed: false });
    changeName('');
  };

  const isDisabled = name === '';

  return (
    <Form style={styles.container}>
      <Item inlineLabel>
        <Label>Task name</Label>
        <Input value={name} onChangeText={text => changeName(text)} />
      </Item>
      <Button
        disabled={isDisabled}
        success
        full
        style={styles.button}
        onPress={() => onButtonClick()}
      >
        <Text> Add </Text>
      </Button>
    </Form>
  );
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
  },
});