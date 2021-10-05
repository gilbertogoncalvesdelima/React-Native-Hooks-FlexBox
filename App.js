import React from "react";
import { View, StyleSheet, Text } from 'react-native';


const App = () => {
  return (
   <View style={styles.container}>
   <View style={styles.header}> 
   <Text>Voltar</Text> 
   <Text>Título</Text>
   <Text>Perfil</Text>
   </View>
   
   <View style={styles.container_box}>
   <View style={styles.box}/>
   <View style={styles.box}/>
   <View style={styles.box}/>
   <View style={styles.box}/>
   </View>
   </View>
  );
}

const styles = StyleSheet.create({


container: {
flex: 1, 
backgroundColor: '#CCC',
},


header: { 
height: 60,
backgroundColor: '#FFF',
paddingHorizontal: 20,
paddingTop: 20,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
},


container_box: {
flex:1,
backgroundColor: '#CCC',
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: "center",
},


box: {
width: 100, // Largura
height: 100, // ALtura
backgroundColor: '#999', // Cor de Fundo
borderWidth: 5, // Borda
margin: 10,
}
});

export default App;
