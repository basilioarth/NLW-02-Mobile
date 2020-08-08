import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';


interface PageHeaderProps {
    title: string;
    headerRigth?: ReactNode; // Diz pro HeaderPage que podemos receber um componente como uma propriedade
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRigth, children }) => {

    const { navigate } = useNavigation();

    function handleGoBack(){
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" style={styles.icons}/>
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" style={styles.icons}/>
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRigth}
            </View>

            {children}
        </View>
    );
}

export default PageHeader;