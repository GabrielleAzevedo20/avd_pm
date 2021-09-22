import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Title, Input2, Input3 } from './styles';
import { Button } from '../components/Button/Button';
import { InfoCard } from '../components/InfoCard/InfoCard';


interface IInfoEscolaridade {
  id: string;
  codigo: string;
  escolaridade: string;
}

export function Home() {

  const [newSkill, setNewSkill] = useState<IInfoEscolaridade[]>([])
  const [newCodigo, setNewCodigo] = useState('')
  const [newEscolaridade, setNewEscolaridade] = useState('');

  function handleAddNewInfo() {
    if (newEscolaridade === '' || newCodigo === '') {
      alert('Favor preencher o campo que está vazio')
      return
    }

    const data = {
      id: String(new Date().getTime()),
      codigo: newCodigo,
      escolaridade: newEscolaridade,
    }

    setNewSkill([...newSkill, data])
    setNewCodigo('')
    setNewEscolaridade('')
  }
  function handleRemoveInfo(id: string) {
    setNewSkill(newSkill => newSkill.filter(info => info.id !== id))
  }


  useEffect(() => {
    async function loadData() {
      const storagedInfo = await AsyncStorage.getItem('@newskill:infos')
      if(storagedInfo) {
        setNewSkill(JSON.parse(storagedInfo))
      }
    }
    loadData();
    // async function removeAll() {
    //   await AsyncStorage.removeItem('@newskill:infos')
    // }
  }, []);
  useEffect(() => {
    async function saveData() {
    await AsyncStorage.setItem('@newskill:infos', JSON.stringify(newSkill));
    }
    saveData();
  }, [newSkill]);


  return (
    <>
    <Container>

      <Title>Escolaridade</Title>

        <Input2 placeholder='Codigo'
          placeholderTextColor='#050A0E'
          value={newCodigo}
            onChangeText={value => setNewCodigo(value)} />

        <Input3 placeholder='Escolaridade'
          placeholderTextColor='#050A0E'
          value={newEscolaridade}
          onChangeText={value => setNewEscolaridade(value)} />


      <Button
        title="Adicionar"
        onPress={handleAddNewInfo} />

      <Title style={{ marginVertical: 20 }}>Registro de Alunos</Title>

      <FlatList showsVerticalScrollIndicator={true}
          data={newSkill}
          keyExtractor={item => item.id}
          renderItem = {({ item }) => (
            <InfoCard
              codigo={item.codigo}
              escolaridade={item.escolaridade}
              onPress={() => handleRemoveInfo(item.id)}
              />
          )}
      />


    </Container>
      </>
  );
}
