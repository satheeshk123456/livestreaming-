import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
const generateUniqueUserID = () => {
    return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

export default function HomePage() {
    const navigation = useNavigation();
    const [userID, setUserID] = useState('');
    const [liveID, setLiveID] = useState('');
    const insets = useSafeAreaInsets();

    useEffect(() => {
        setUserID(generateUniqueUserID());
        setLiveID(generateUniqueUserID());
    }, []);

    const handleLiveIDChange = debounce((text) => {
        setLiveID(text.replace(/[^0-9A-Za-z_]/g, ''));
    }, 300);

    const onJoinPress = (isHost) => {
        if (!liveID || !userID) {
            Alert.alert('Error', 'Please provide a valid Live ID and make sure User ID is generated.');
            return;
        }
        navigation.navigate(isHost ? 'HostPage' : 'AudiencePage', {
            userID,
            userName: userID,
            liveID,
        });
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Text style={styles.userID}>Your User ID: {userID}</Text>
            <Text style={[styles.liveID, styles.leftPadding]}>Live ID for you:</Text>
            <TextInput
                placeholder="live id"
                style={styles.input}
                onChangeText={handleLiveIDChange}
                maxLength={20}
                value={liveID}
            />
            <View style={[styles.buttonLine, styles.leftPadding]}>
                <Button
                    disabled={!liveID}
                    title="enter"
                    onPress={() => onJoinPress(true)}
                />
                <View style={styles.buttonSpacing} />
                <Button
                    disabled={!liveID}
                    title="start"
                    onPress={() => onJoinPress(false)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    buttonLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginVertical: 10,
    },
    buttonSpacing: {
        width: 15,
    },
    input: {
        height: 45,
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
    },
    userID: {
        fontSize: 16,
        color: '#333333',
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    liveID: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 10,
    },
    leftPadding: {
        paddingLeft: 20,
    }
});
