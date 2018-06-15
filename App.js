import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

    state = { loggedIn: null }

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBv0CwnUh3Uw7P6CEJOZ1Dgkq0pHcpTSZY',
            authDomain: 'auth-dadf4.firebaseapp.com',
            databaseURL: 'https://auth-dadf4.firebaseio.com',
            projectId: 'auth-dadf4',
            storageBucket: 'auth-dadf4.appspot.com',
            messagingSenderId: '1006520494027'
          });

        firebase.auth().onAuthStateChanged((user) =>{
            if(user) {
                this.setState({loggedIn:true});
            }
            else {
                this.setState({loggedIn:false});
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
                    <View style={styles.logOutContainer}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
            return(
                <View style={{marginTop:40}}> 
                    <Spinner size='large'/>
                </View>
            );
        }
        
    }

    render() {
      return (
          <View>
              <Header headerText="Authentication" />
              {this.renderContent()}
          </View>
      );
    }
}

const styles = {
    logOutContainer:{
        marginTop: 10,
        flexDirection: 'row'
    }
}