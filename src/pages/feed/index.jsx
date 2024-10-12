import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Pedro Bianchi" image="https://avatars.githubusercontent.com/u/145021842?s=400&u=ebb2a9b66de7e89d33cce3157155106efecd959a&v=4" percentual={25}/>
                <UserInfo nome="Pedro Bianchi" image="https://avatars.githubusercontent.com/u/145021842?s=400&u=ebb2a9b66de7e89d33cce3157155106efecd959a&v=4" percentual={65}/>
                <UserInfo nome="Pedro Bianchi" image="https://avatars.githubusercontent.com/u/145021842?s=400&u=ebb2a9b66de7e89d33cce3157155106efecd959a&v=4" percentual={45}/>
                <UserInfo nome="Pedro Bianchi" image="https://avatars.githubusercontent.com/u/145021842?s=400&u=ebb2a9b66de7e89d33cce3157155106efecd959a&v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
