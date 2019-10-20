import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  //
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  //
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
    console.log(courseGoals);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>

        <FlatList
          data={courseGoals}
          renderItem={itemGoals => {
            return (
              <View style={styles.listItem}>
                <Text>{itemGoals.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
