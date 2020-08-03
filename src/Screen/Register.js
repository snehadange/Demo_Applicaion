import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';


export default class Register extends React.Component {

    state = {
        errorMessage: null,
        email: '',
        name: '',
        password: '',
        birthDate: '',
        gender: '',
        link: '',


    }

    handleRegister = async () => {

        const { email, name, password, birthDate, gender, link } = this.state;

        if (name == '') {
            alert("Name is required")

        } else if (email == '') {
            alert("email is required")
        } else if (gender == '') {
            alert("Please select gender")
        } else if (link == '') {
            alert("please enter any social link ")
        } else if (birthDate == '') {
            alert("please enter your BirthDate ")
        } else {
            let user = [{ email: email, name: name, password: password, birthDate: birthDate, gender: gender, link: link }]

            await AsyncStorage.setItem('key', JSON.stringify(user))
            console.log("____Register:", JSON.stringify(user))
            this.props.navigation.navigate('Login')
           /* this.setState({
                name: '',
                email: '',
                password: '',
                birthDate: '',
                gender: '',
                link: ''
            })*/
        }




    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{'Welcome \n Register'}</Text>

                <View>
                    {this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>

                    <View style={{ marginTop: 35 }}>
                        <Text style={styles.inputTitle}>Full name</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name} />
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email} />
                    </View>


                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.inputTitle}>BirthDate:</Text>
                        <DatePicker
                            style={styles.birthDate}
                            date={this.state.birthDate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1992-01-01"
                            maxDate="2021-12-31"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(birthDate) => { this.setState({ birthDate: birthDate }) }}
                        />
                    </View>

                    <View style={{ marginTop: 45, flexDirection: 'row' }}>
                        <Text style={styles.inputTitle}>Gender:</Text>
                        <RadioButton.Group onValueChange={gender => { this.setState({ gender: gender }) }} value={this.state.gender}>
                            <View style={{ flexDirection: 'row', top: -10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioButton value="female" />
                                    <Text style={styles.radiobuttonText}>Female</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 30 }}>

                                    <RadioButton value="male" />
                                    <Text style={styles.radiobuttonText}>Male</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>


                    <View style={{ marginTop: 28 }}>
                        <Text style={styles.inputTitle}>Add your Linkdin Link</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={link => this.setState({ link })}
                            value={this.state.link} />
                    </View>

                    <View style={{ marginTop: 35 }}>
                        <Text style={styles.inputTitle}>password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password} />
                    </View>

                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 40 }} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ color: '#414959', fontSize: 13, fontWeight: 'bold' }}>Alreay have an account?<Text style={{ fontWeight: "500", color: "#E9446A", fontWeight: 'bold' }}>Login</Text></Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
        top: 10
    },
    inputTitle: {
        color: 'black',
        fontSize: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        //left:30
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D',
        //left:20,

    },

    button: {
        marginHorizontal: 30,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        top: -10
    },

    errorMessage: {
        color: 'red',
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center"
    },
    birthDate: {
        width: 300,
        top: 20,
    },
    radiobuttonText: {
        top: 10,
        color: 'black',
        fontSize: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})