import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Modal, Text, View } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';

export default function UserModal({ createUser }) {
  const [name, changeName] = useState('');
  const [age, changeAge] = useState('');

  const onButtonClick = () => {
    createUser({ id: Date.now(), name, age });
    changeName('');
    changeAge('');
  };

  const isDisabled = name === '' && age === '';

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false}>
        <View style={styles.content}>
          <View>
            <Form>
              <Item inlineLabel>
                <Label>Name</Label>
                <Input value={name} onChangeText={text => changeName(text)} />
              </Item>
              <Item inlineLabel>
                <Label>Age</Label>
                <Input keyboardType="numeric" value={age} onChangeText={text => changeAge(text)} />
              </Item>
              <Button
                disabled={isDisabled}
                success
                full
                style={styles.button}
                onPress={() => onButtonClick()}
              >
                <Text> Submit </Text>
              </Button>
            </Form>
          </View>
        </View>
      </Modal>
    </View>
  );
}

UserModal.propTypes = {
  createUser: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});