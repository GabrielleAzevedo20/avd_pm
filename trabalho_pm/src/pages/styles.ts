import styled from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.View`
    flex: 1px;
    background-color: #171717;
    padding-left: 17px;
    padding-top: 50px;
    padding-right: 30px;
`;

export const Title = styled.Text`
    color: #EDEDED;
    font-size: 20px;
    font-weight: bold;
    padding: 16px;
    margin: 7px;
`;


export const Input2 = styled.TextInput`
    background-color: #7952B3;
    color: #fff;
    font-size: 16px;
    padding: ${Platform.OS === 'ios' ? '18px': '15px'};
    margin-top: 30px;
    borderRadius: 7px;
`;

export const Input3 = styled.TextInput`
    background-color: #7952B3;
    color: #fff;
    font-size: 16px;
    padding: ${Platform.OS === 'ios' ? '18px' : '15px'};
    margin-top: 30px;
    border-radius: 7px;
`;