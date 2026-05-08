import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, { HOST_DEFAULT_CONFIG, ZegoMenuBarButtonName } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import * as ZIM from 'zego-zim-react-native';
import KeyCenter from "../live/KeyCenter";

export default function HostPage({ route, navigation }) {
    const prebuiltRef = useRef();
    const { userID, userName, liveID } = route.params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltLiveStreaming
                ref={prebuiltRef}
                appID={KeyCenter.appID}
                appSign={KeyCenter.appSign}
                userID={userID}
                userName={userName}
                liveID={liveID}
                config={{
                    ...HOST_DEFAULT_CONFIG,
                    onStartLiveButtonPressed: () => { console.log('Host started live stream'); },
                    onLiveStreamingEnded: () => {
                        console.log('Live streaming ended');
                    },
                    onLeaveLiveStreaming: () => {
                        console.log('Host left the live stream');
                        navigation.navigate('HomePage');
                    },
                    durationConfig: {
                        isVisible: true,
                        onDurationUpdate: (duration) => {
                            console.log('Live duration:', duration);
                            if (duration === 10 * 60) { // Stop after 10 minutes
                                prebuiltRef.current.leave();
                            }
                        }
                    },
                    topMenuBarConfig: {
                        buttons: [ZegoMenuBarButtonName.minimizingButton, ZegoMenuBarButtonName.leaveButton],
                    },
                    onWindowMinimized: () => {
                        console.log('Window minimized');
                        navigation.navigate('HomePage');
                    },
                }}
                plugins={[ZIM]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
