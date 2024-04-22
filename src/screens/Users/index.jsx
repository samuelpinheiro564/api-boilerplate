import { View } from "react-native";
import axios from "axios";
import styles from "./styles";
import Title from "../../components/Title";
import { useState,useEffect } from "react";


export default function Users() {
  const [users, setUsers] = useState([]);

const apiURl = process.env.EXPO_PUBLIC_API_URL;

const getUsers = async () => {
  try{
const response = await axios.get(`${apiURl}/users`);
const { data } = response;
    setUsers(data);;
  }catch(error){
    console.error("Erro ao buscar usuários", error);
  }
};
useEffect(() => {  
  getUsers();
  console.log(users);
}, []);

  return (
    <View style={styles.container}>
      <Title title="Usuarios" />
   {users ? (
    users.map((user) => (
        <View key={user.id} style={styles.user}>
          <Text style={styles.userText}>{user.name}</Text>
          <Text style={styles.userText}>{user.email}</Text>
          <Text style={styles.userText}>{user.password}</Text>

      
        </View>
   ))):(
      <Title title="Carregando usuários" />
    )}
          </View>
        );
      }
