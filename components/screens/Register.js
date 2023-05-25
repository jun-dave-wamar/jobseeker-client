import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Alert, Image, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useStore } from '../hooks/authStore';

const { height, width } = Dimensions.get('window');
export default function Register() {
    const navigation = useNavigation();
    const setRole = useStore((state) => state.setRole);
    const setUser = useStore((state) => state.setUser);
    const setEmail = useStore((state) => state.setEmail);
    const setToken = useStore((state) => state.setToken);
    const setOpen = useStore((state) => state.setOpen);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmailed] = useState('')
    const [company, setCompany] = useState('')


    const [checked,] = React.useState(false);
    const [isHide, setIsHide] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [companyError, setCompanyError] = useState(false);


    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setUsernameError(!username);
                setPasswordError(!password);
            } else {
                const response = await axios.post(
                    'https://jobseeker-green.vercel.app/api/register',
                    { username, password,email, company}
                );

                if (response.status === 200) {
                    setOpen(false);
                    setRole(response.data.user.role);
                    setUser(response.data.user.username);
                    setEmail(response.data.user.email);
                    setToken(response.data.token);

                    Alert.alert(
                        'Success',
                        'Successfully Logged in',
                        [
                            {
                                text: 'Close',
                                onPress: () => {
                                    setUsername('');
                                    setPassword('');
                                    navigation.navigate('Home');
                                },
                                style: 'cancel',
                            },
                        ],
                        { cancelable: false }
                    );
                }
            }
        } catch (err) {
            Alert.alert(
                'Error',
                `Invalid username or password. Please try again`,
                [
                    {
                        text: 'Close',
                        onPress: () => { },
                        style: 'cancel',
                    },
                ],
                { cancelable: false }
            );
        }
    };

    const NavigateRegister = () => {
        navigation.navigate('Register');
    };


    const showPassword = () => {
        setIsHide(!isHide);
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: 'transparent' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={{ height: 400, position: 'relative', resizeMode: 'contain' }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -400,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image style={{ width: '140%', height: '100%', resizeMode: 'contain' }} source={require('../../assets/images/topBg.png')} />
                            </View>

                        </View>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                width: '100%',
                                marginTop: 20,
                            }}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontFamily: 'Poppins-Regular',
                                        textAlign: 'center',
                                        color: '#9A9C9D',
                                        marginTop: 10,
                                    }}>
                                    Register to your account
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 28 }}>
                            <View style={{ position: 'relative' }}>
                                <Image
                                    style={{ position: 'absolute', top: 15, left: 15, width: 24, height: 24, resizeMode: 'contain' }}
                                    source={require('../../assets/images/user-icon.png')}
                                />
                                <TextInput
                                    style={{
                                        backgroundColor: 'rgba(4, 53, 43, 0.15)',
                                        width: '100%',
                                        height: 50,
                                        borderRadius: 10,
                                        paddingLeft: 50,
                                        fontSize: 14,
                                    }}
                                    placeholder="Username"
                                    value={username}
                                    placeholderTextColor="#04352B"
                                    onChangeText={(text) => setUsername(text)}
                                />
                            </View>
                            {usernameError ? (
                                <Text style={styles.errText}>Please input username</Text>
                            ) : (
                                ''
                            )}

                            <View style={{ position: 'relative' }}>
                                <Image
                                    style={{ position: 'absolute', top: 30, left: 15, width: 24, height: 24, resizeMode: 'contain' }}
                                    source={require('../../assets/images/password-icon.png')}
                                />
                                <TextInput
                                    style={{
                                        backgroundColor: 'rgba(4, 53, 43, 0.15)',
                                        width: '100%',
                                        height: 50,
                                        borderRadius: 10,
                                        paddingLeft: 50,
                                        marginTop: 18,
                                        fontSize: 14,
                                    }}
                                    placeholder="Password"
                                    secureTextEntry={isHide ? false : true}
                                    value={password}
                                    placeholderTextColor="#04352B"
                                    onChangeText={(text) => setPassword(text)}
                                />

                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        top: 30,
                                        right: 15,
                                        backgroundColor: 'transparent',
                                    }}
                                    onPress={showPassword}>
                                    <Image
                                        style={{ width: 24, height: 24, resizeMode: 'contain' }}
                                        source={
                                            isHide
                                                ? require('../../assets/images/eye-icon-hide.png')
                                                : require('../../assets/images/eye-icon.png')
                                        }
                                    />
                                </TouchableOpacity>
                            </View>
                            {passwordError ? (
                                <Text style={styles.errText}>Please input password</Text>
                            ) : (
                                ''
                            )}

                            <View style={{ position: 'relative' }}>
                                <Image
                                    style={{ position: 'absolute', top: 30, left: 15, width: 24, height: 24, resizeMode: 'contain' }}
                                    source={require('../../assets/images/email-icon.png')}
                                />
                                <TextInput
                                    style={{
                                        backgroundColor: 'rgba(4, 53, 43, 0.15)',
                                        width: '100%',
                                        height: 50,
                                        borderRadius: 10,
                                        paddingLeft: 50,
                                        marginTop: 18,
                                        fontSize: 14,
                                    }}
                                    placeholder="Email"
                                    value={email}
                                    placeholderTextColor="#04352B"
                                    onChangeText={(text) => setEmailed(text)}
                                />

                            </View>
                            {emailError ? (
                                <Text style={styles.errText}>Please input email</Text>
                            ) : (
                                ''
                            )}

                            <View style={{ position: 'relative' }}>
                                <Image
                                    style={{ position: 'absolute', top: 30, left: 15, width: 24, height: 24, resizeMode: 'contain' }}
                                    source={require('../../assets/images/company-icon.png')}
                                />
                                <TextInput
                                    style={{
                                        backgroundColor: 'rgba(4, 53, 43, 0.15)',
                                        width: '100%',
                                        height: 50,
                                        borderRadius: 10,
                                        paddingLeft: 50,
                                        marginTop: 18,
                                        fontSize: 14,
                                    }}
                                    placeholder="Company"
                                    value={company}
                                    placeholderTextColor="#04352B"
                                    onChangeText={(text) => setCompany(text)}
                                />
                            </View>
                            {companyError ? (
                                <Text style={styles.errText}>Please input company</Text>
                            ) : (
                                ''
                            )}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    flexWrap: 'wrap',
                                    marginTop: 20,
                                }}>
                                <TouchableOpacity style={{ width: '100%' }} onPress={NavigateRegister}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color: '#04352B',
                                            fontSize: 11,
                                        }}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    backgroundColor: '#04352B',
                                    borderRadius: 10,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'flex-end',
                                    marginTop: 50,
                                }}
                                onPress={handleLogin}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontSize: 15,
                                        fontFamily: 'Poppins-Medium',
                                    }}>
                                    Register
                                </Text>
                            </TouchableOpacity>

                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#04352B',
                                    fontSize: 11,
                                    marginTop: 20,
                                }}>

                            </Text>

                            <View style={{ flex: 1 }} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    errText: {
        color: '#FF0000',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    inner: {
        paddingHorizontal: 25,
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 15
    }
});
