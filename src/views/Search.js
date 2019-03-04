import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { MKTextField } from 'react-native-material-kit';
import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends Component {
  state = {
    data: [
            {
              label: 'Medical Record Number',
            },
            {
              label: 'Patient Name',
            },
            {
              label: 'Identitiy Number (NIK KTP)',
            },
          ],
        };
        
        // update state
        onPress = data => this.setState({ data });
        
        render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={styles.container}>
              <Text style={styles.valueText}>Search patient by:</Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                <MKTextField
                  placeholder={`${selectedButton} here...`}
                  style={{width: 250, marginBottom: 20}}
                />
                <Button title={'Search'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    valueText: {
        fontSize: 18, 
        marginTop: 10,
        marginBottom: 10,
    },
});