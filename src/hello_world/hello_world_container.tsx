import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import { MainPage } from '../stores/main_tabs';
import React from 'react';
import { View, TextInput } from 'react-native';
import * as mainTabs from '../stores/main_tabs';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

export interface Props {
    readonly mainTabsInProps: mainTabs.Store;
    readonly counterInProps: counter.Store;
    readonly messageInProps: message.Store;
}

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    pushUserWithUrl(url: string): void;
    pushUserWithId(id: MainPage): mainTabs.SetMainTabAction;
    setMessage(newMessage: string): message.MessageAction;
    goBack(): void;
    goForwards(): void;
}

export const HelloWorldContainer: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { mainTabsInProps, counterInProps, messageInProps, increment, decrement,
        goBack, goForwards,
        pushUserWithUrl, pushUserWithId, setMessage }: Props & Actions = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={(): counter.SetCounterAction => increment(counterInProps)} />
                <MyButton title='Decrement' onPress={(): counter.SetCounterAction => decrement(counterInProps)} />
            </View>
            <Output value={counterInProps.value} />
            <TwiceTheOutput value={counterInProps.value} />
            <View>
                <TextInput value={messageInProps.message} onChangeText={(text: string): message.MessageAction => setMessage(text)} />
                <Output value={messageInProps.message} />
                <Output value={mainTabsInProps.mainTab} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='To One with URL' onPress={(): void => pushUserWithUrl('/user/MainPage.One')} />
                <MyButton title='To Two with action' onPress={(): mainTabs.SetMainTabAction => pushUserWithId(MainPage.Two)} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='back' onPress={(): void => goBack()} />
                <MyButton title='forward' onPress={(): void => goForwards()} />
            </View>
        </View >
    );
};
