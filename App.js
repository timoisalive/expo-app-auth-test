import React from 'react';
import { Button, Platform, SafeAreaView } from 'react-native';
import { AppAuth } from 'expo';

const bundleIdentifier = 'expo.app.auth.test';
const auth0ClientId = '5swB8yUAHLD4ackTE1NDujImSRcQ0IAd';
const auth0Domain = 'expo-app-auth-test.eu.auth0.com';

const config = {
  issuer: `https://${auth0Domain}`,
  scopes: ['openid profile'],
  clientId: auth0ClientId,
  redirectUrl: `${bundleIdentifier}://${auth0Domain}/${Platform.OS}/${bundleIdentifier}/callback`
};

export default class App extends React.Component {
  login = () => {
    console.log('config:', JSON.stringify(config, null, 2));

    AppAuth.authAsync(config)
      .then(response => console.log('resolved', response))
      .catch(error => console.log('error', error));
  };

  render() {
    return (
      <SafeAreaView>
        <Button title="Login" onPress={this.login} />
      </SafeAreaView>
    );
  }
}
