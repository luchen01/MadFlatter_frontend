import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Location, Permissions, MapView } from 'expo';
import Swiper from 'react-native-swiper';

let user = '';
//Screens
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  press() {
    this.props.navigation.navigate('Authorization');
  }

  register() {
    this.props.navigation.navigate('Register');
  }

  bypass() {
    this.props.navigation.navigate('Swipe');
  }

  componentDidMount(){
    AsyncStorage.getItem('user')
    .then(result => {
      var parsedResult = JSON.parse(result);
      var username = parsedResult.username;
      var password = parsedResult.password;
      if (username && password) {
        this.bypass()
        user = username;
      }
      // Don't really need an else clause, we don't do anything in this case.
    })
    .catch(err => { console.log('Error: ', err );})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>Login to HoHoHo!</Text>
        <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Tap to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Tap to Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  submit() {
    fetch('https://hohoho-backend.herokuapp.com/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
       console.log(responseJson);
       if(responseJson.success){
         this.props.navigation.goBack();
       } else {
         alert('Username already exists!')
       }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            margin: 5,
            padding: 5
          }}
          placeholder="Enter your username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            margin: 5,
            padding: 5
          }}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <TouchableOpacity style={[styles.button, styles.buttonRed]} onPress={()=>this.submit()}>
          <Text style={[styles.textBig, styles.buttonLabel]}>Register</Text>
        </TouchableOpacity>


      </View>
    )
  }
}

class Authorization extends React.Component {

  static navigationOptions = {
    title: 'Authorize'
  };

  constructor(){
    super();
    this.state = {
      message: ''
    }
  }

  submit() {
    console.log(this.state.username, this.state.password);
    fetch('https://hohoho-backend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
       console.log(responseJson);
       if(responseJson.success){
        AsyncStorage.setItem('user', JSON.stringify({'username': this.state.username, 'password': this.state.password}))
        .then(()=>{
          this.props.navigation.navigate('Swipe');
          user = this.state.username;
          console.log('Successfully logged in as: ', this.state.username);
        })
       } else {
         this.setState({
           message: "Incorrect username or password!",
           username: '',
           password: ''
         });

       }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>{this.state.message}</Text>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            margin: 5,
            padding: 5
          }}
          placeholder="Enter your username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            margin: 5,
            padding: 5
          }}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={ () => {this.submit()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>


      </View>
    )
  }
}

class Users extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Users',
    // headerRight: <Button title='Messages' onPress={ () => {navigation.state.params.onRightPress()} } />,
    // headerLeft: <Button title='Logout' onPress={ () => {navigation.state.params.onLeftPress()} } />
  });

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    fetch('https://hohoho-backend.herokuapp.com/users', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => (response.json()))
    .then((res) => {
      this.setState({
        dataSource: ds.cloneWithRows(res.users)
      })
    })
  }

  send(user){
    fetch('https://hohoho-backend.herokuapp.com/messages', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: user._id,
      })
    })
    .then((response) => (response.json()))
    .then((res) => {
      console.log(res);
      res.success ? alert('Successfully sent message to ' + user.username) : alert('oops!')
    })
  }

  messages(){
    this.props.navigation.navigate('Messages');
  }

  sendLocation = async(user) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      //handle failure
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    console.log(location);
    fetch('https://hohoho-backend.herokuapp.com/messages', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: user._id,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
      })
    })
    .then((response) => (response.json()))
    .then((res) => {
      console.log(res);
      res.success ? alert('Successfully sent message with location to ' + user.username) : alert('oops!')
    })
  }

  render() {
    return(
      <View style={styles.containerFull}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <TouchableOpacity
              onPress={() => {this.send(rowData)}}
              onLongPress={this.sendLocation.bind(this, rowData)}
              delayLongPress={500}>
              <View style={{borderWidth: 2}}>
                <Text style={styles.welcome}>{rowData.username}</Text>
              </View>
            </TouchableOpacity>)}
        />
      </View>
    )
  }
}

class Messages extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Messages'
  });

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    fetch('https://hohoho-backend.herokuapp.com/messages', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => (response.json()))
    .then((res) => {
      this.setState({
        dataSource: ds.cloneWithRows(res.messages)
      })
    })
  }

  mapPress = (lat, long, sender ) => {
    console.log(this.props);
    this.props.navigation.navigate('Map', {latitude: lat, longitude: long, username: sender});
  }

  render() {
    return(
      <View style={styles.containerFull}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            console.log(rowData, 288);
            var sentStyle = {alignItems: 'flex-start'};
            var receivedStyle = {alignItems: 'flex-end'};
            var textStyle = rowData.to.username === user ? {color: 'pink'} : {color: 'skyblue'}
            console.log(user);
            return(
              <View style={{borderWidth: 2, borderColor: 'white', padding: 10, backgroundColor: 'black'}}>
                <View style={rowData.to.username === user ? receivedStyle : sentStyle}>
                  <Text style={textStyle}>To: {rowData.to.username}</Text>
                  <Text style={textStyle}>From: {rowData.from.username}</Text>
                  <Text style={textStyle}>Message: {rowData.body}</Text>
                  <Text style={textStyle}>When: {rowData.timestamp}</Text>
                </View>

                {(rowData.location && rowData.location.longitude) ?
                  <TouchableOpacity onPress={() => (this.mapPress(rowData.location.latitude, rowData.location.longitude, rowData.from.username))}>
                    <MapView
                      region={{
                        latitude: rowData.location.latitude,
                        longitude: rowData.location.longitude,
                        latitudeDelta: .125,
                        longitudeDelta: .0625
                      }}
                      style={{
                        height: 200
                      }}
                      rotateEnabled={false}
                      scrollEnabled={false}
                      zoomEnabled={false}
                      >
                      <MapView.Marker
                        coordinate={{
                          latitude: rowData.location.latitude,
                          longitude: rowData.location.longitude
                        }}
                        title={rowData.from.username + "'s location"}
                        />
                    </MapView>
                  </TouchableOpacity>
                  : <Text> No location sent </Text>}
              </View>
            )
          }
        }
      />
    </View>
    )
  }
}

class SwiperScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
    title: 'HoHoHo!',
    headerLeft: <Button title='Logout' onPress={ () => {
      AsyncStorage.setItem('user', JSON.stringify({}))
      .then(()=>{
        navigation.navigate('Login');
        console.log('Successfully logged out');
      })
    } } />
  }
  };

  constructor(props) {
    super(props);
  }

  logout(){
    AsyncStorage.setItem('user', JSON.stringify({}))
    .then(()=>{
      this.props.navigation.navigate('Login');
      console.log('Successfully logged out');
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onLeftPress: this.logout.bind(this)
    })
  }

  render() {
    return (
      <Swiper>
        <Users/>
        <Messages {...this.props}/>
      </Swiper>
    );
  }
}

class MapScreen extends React.Component {
  constructor (props){
    super (props)
  }

    render() {
      console.log(this.props.navigation);
      return(
        <MapView
          region={{
            latitude: this.props.navigation.state.params.latitude,
            longitude: this.props.navigation.state.params.longitude,
            latitudeDelta: .25,
            longitudeDelta: .125
          }}
          style={styles.containerFull}
          >
          <MapView.Marker
            coordinate={{
              latitude: this.props.navigation.state.params.latitude,
              longitude: this.props.navigation.state.params.longitude,
            }}
            title={this.props.navigation.state.params.username + "'s location"}
            />
        </MapView>
      )
    }
}

//Navigator
export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Authorization: {
    screen: Authorization,
  },
  Users: {
    screen: Users,
  },
  Messages: {
    screen: Messages,
  },
  Swipe: {
    screen: SwiperScreen,
  },
  Map: {
    screen: MapScreen,
  }
}, {initialRouteName: 'Login'});


//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerFull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textBig: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  buttonRed: {
    backgroundColor: '#FF585B',
  },
  buttonBlue: {
    backgroundColor: '#0074D9',
  },
  buttonGreen: {
    backgroundColor: '#2ECC40'
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
});
