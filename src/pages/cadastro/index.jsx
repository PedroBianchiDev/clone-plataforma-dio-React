import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container, Title, Column, TitleLogin, SubtitleLogin,CriarText, Row, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Cadastro = () => {
    
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/home')
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else{
            alert('Usuário ou senha inválido')
            }
        }catch(e){
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome" leftIcon={<MdPerson />} name="nome" errorMessage={errors?.name?.message} control={control} />
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" errorMessage={errors?.email?.message} control={control} />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" errorMessage={errors?.password?.message} control={control} />
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <SubtitleLogin>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                </Row>
                <CriarText onClick={handleClickSignIn}>Fazer login.</CriarText>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }