import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Info, ButtonInfo, TextInfo, Text  } from './styles';

interface InfoCardProps extends TouchableOpacityProps {
  codigo: string;
  escolaridade: string;
}

export function InfoCard({ codigo, escolaridade, ...rest }: InfoCardProps) {
    return (
        <ButtonInfo
          {...rest}
        >


        <TextInfo>
          Codigo: {codigo}
        </TextInfo>

        <TextInfo>
          Escolaridade: {escolaridade}
        </TextInfo>
            </ButtonInfo>
    )
}
