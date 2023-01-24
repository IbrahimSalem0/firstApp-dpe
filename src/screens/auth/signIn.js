import * as React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, Keyboard, TextInput, Button } from 'react-native';

import { AuthContext } from '../../store/context';
import styles from './styles';
import userApi from '../../api/userApi';

// Validate form.

export const SignIn = () => {
  const [loading, setLoading] = React.useState(false);

  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = () =>{
    signIn('2')
    console.log("press me", mobile );

  }
  const {
    authContext: { signIn },
  } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> Welcome Ibrahim </Text>
      <View style={{ width: 150 }}>
        <TextInput
          name="name"
          placeholder="mobile"
          style={styles.input}
          onChangeText={(mobile) => {
            setMobile(mobile);
            console.log(mobile);
          }}
          value={mobile}
          maxLength={12}
          keyboardType="email-address"
        />
        <TextInput
          name="name"
          placeholder="password"
          style={styles.input}
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity onPress={onSubmit}   style={{borderWidth:1, marginTop:35, paddingVertical: 5, backgroundColor:'gray', borderColor:'gray', borderRadius: 3, opacity: .5}} >
          <Text style={{textAlign: 'center'}}  > 
            Login
          </Text>




        </TouchableOpacity>


      </View>
    </View>
  );
};

SignIn.defaultProps = {
  onSubmit: null,
};
