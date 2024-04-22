import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { useState,useEffect } from "react";

const [users, setUsers] = useState([]);
const apiURl = process.env.EXPO_PUBLIC_API_URL;

export default function Users() {
const getUsers = async () => {
  try{
    const response = await fetch(`${apiURl}/users`);
    const data = await response.json();
    setUsers(data);;
  }catch(error){
    console.error("Erro ao buscar usuários", error);
    res.status(500).send("Erro ao buscar usuários");

  }
};
useEffect(() => {  
  getUsers();
  console.log(users);}, []);

  return (
    <View style={styles.container}>
      <Title title="Usuarios" />
    </View>
  );
}
