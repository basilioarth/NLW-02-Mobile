import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';
import Landing from './src/pages/Landing';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  // As fontes demoram um pouco para carregar. A ideia é que enquanto as fontes ainda estão
  // carregando, o App n saia da tela de carregamento (quem ativa essa terra de carregamento
  // é o AppLoading; por isso que precisamos dele). 'fontsLoaded' inicia como false e
  // só se modifica para true quando todas as fontes são carregadas.
  if (!fontsLoaded) {
    return <AppLoading />
    // Faz com que o App aprensente a tela de carregamento
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}



