
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Image } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
          <Text style={styles.sectiontitle}>To Do List</Text>
      </View>
      <View style={styles.Image}>
          <Image source={{
              width:120,
              height:120,
              marginBottom:50,
              padding:50,
              alignItem:'center',
              uri:"https://img.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg"
          }}>
          </Image>
      </View>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.fixToText}>
            <Button
              title="Add"
              color="#001a66"
              onPress={() => Alert.alert('You are going to add a new task!')}
            />
            <Button
              title="Save"
              color="#001a66"
              onPress={() => Alert.alert('changes are saved.')}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.items}>
            < Task text={'Task 1'}/>
            < Task text={'Task 2'}/>
            < Task text={'Task 3'}/>
            < Task text={'Task 4'}/>
            < Task text={'Task 5'}/>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f5ff',
    paddingLeft:10,
    paddingRight:10,
  },
  taskwrapper:{
    paddingTop:80,
  },
  sectiontitle:{
    color:'#001a66',
    fontSize:25,
    fontWeight:'bold',
    paddingLeft:10,
  },
  Image:{
    justifyContent:'center',
    alignItems:'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items:{
    marginTop:30
  }
});
