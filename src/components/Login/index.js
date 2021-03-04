import React from 'react';
import {View, Text, Image} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';

const LoginComponent = () => {
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}> Welcome to Contacts</Text>
        <Text style={styles.subTitle}> Please Login Here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            // value={value}
            // error={'This field is required'}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            // value={value}
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
          />
          <CustomButton primary title="Submit" />
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
