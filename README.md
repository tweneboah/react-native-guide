## Project setup

- Create an account with expo
- Install node js
- Install Exp `npm install -g expo-cli`
- Create a project **expo init rn-first-app**
- Select blank and the provide the name of your app
- This gives a platform for react and react-native
- start the app `npm start`

## Connect to the android/ iphone device

- Start your app

- Download expo client from playStore or iphone store
- Scan the code with your phone camera and click on the notification you will get
- That's all

# Launch

- Navidate to your project and run **yarn start**

# TextInput

- It takes onTextChange() function to update the text input

# Button

- This takes any function you want to run

# Outputting List of data

```js
const App = () => {
  const [enterGoal, setenterGoal] = useState("Yes");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (text) => {
    setenterGoal(text);
  };

  const addGoalHandler = () => {
    setCourseGoals((prevState) => {
      return [...prevState, enterGoal];
    });
  };
  console.log(courseGoals);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Goal"
            onChangeText={goalInputHandler}
            multiline={true}
            value={enterGoal}
          />
        </View>
        <View>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
      </View>
      {/* <View>
        <Text>{enterGoal}</Text>
        {list.map(() => {
          <View>
            <Text>YES</Text>
          </View>;
        })}
      </View> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    padding: 2,
    width: 200,
  },
});
```

# Outputting List of data

```js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

const list = ["Node", "React"];

const App = () => {
  const [enterGoal, setenterGoal] = useState("Yes");
  const [courseGoals, setCourseGoals] = useState(["Yes", "No"]);

  const goalInputHandler = (text) => {
    setenterGoal(text);
  };

  const addGoalHandler = () => {
    setCourseGoals((prevState) => {
      return [
        ...prevState,
        { key: Math.random().toString(), value: enterGoal },
      ];
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Goal"
            onChangeText={goalInputHandler}
            multiline={true}
            value={enterGoal}
          />
        </View>
        <View>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
      </View>

      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <View>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    padding: 2,
    width: 200,
  },
});
```

# Making it scrollable

- By default it doesn't scroll so you need to wrap the entire View with **ScrollView** or you can wrap with a certain View of Data to make it scrollable. You can pass a prop to make it horizontal or vertical

# Working with state and Events

## 1.TextInput

- onChangeText => {(e)=> console.log(e)} This execute on every keystroke. e is the value

## Button Events

- onPress => {} For sending data

# FlatList

```js
. Data = array of data
2. renderItem = function that calls foreach item in your data and it should return a component
3. The arguemnt pass to the function contains a lot of functions and properties and we can our actual data as .item
4 Even the .item is an object too
*/}
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
        />
      </View>
```

# TouchableOpacity

- We want to find a way to delete an item but when use onPress on our custom component it won't work so we will use TouchableOpacity

- NOTE: View has a lot of functions on it
- You can wrap TouchableOpacity with any component and it has a lot of built in functions like onPress ..... therefore we can use this to delete an item by listening to event on it
- You can pass any custom function to it and it will trigger when a user presses it

# Overlay

# TextInput

- Our aim is we want to allow users to enter only 2 numbers, not decimal and other text

- This accept a couple of props


           ** blurOnSubmit**  //After submitting we make the text blur and closes the keyboard but this does not work on ios
            **autoCapitalize="none"**
            **autoCorrect={false}**
            **keyboardType="number-pad"**
            **maxLength={2}** //Specify the amount of numbers it can contain
            **onChangeText={numberInputHandler}** //This functions fires on every number typed so that we can check if the text typed is a number or text
            **value={enteredValue}**

## Function to validate user input to accept only numbers without any symbols

```js
const [enteredValue, setEnteredValue] = useState("");

const numberInputHandler = (inputText) => {
  setEnteredValue(inputText.replace(/[^0-9]/g, ""));
};
```

# How to close keyboard on ios because it doesn't support blurOnSubmit

i. Wrap your entire few with TouchableWithoutFeedback
ii. Register onPress event on it and when it pressed we want to dismiss the keyboard and luckly react native have that function for use called **Keyboard**

```js
 onPress={() => {
        Keyboard.dismiss();
      }}
```

```js
<TouchableWithoutFeedback
  onPress={() => {
    Keyboard.dismiss();
  }}
>
  <View style={styles.screen}>
    <Text style={styles.title}>Start a New Game!</Text>
    <Card style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <Input
        style={styles.input}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={numberInputHandler}
        value={enteredValue}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" onPress={() => {}} color={Colors.accent} />
        </View>
        <View style={styles.button}>
          <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
        </View>
      </View>
    </Card>
  </View>
</TouchableWithoutFeedback>
```

## Ressetting and confirming user input

# Buttons

### Resseting the input value

```js
const resetInputHandler = () => {
  setEnteredValue("");
};
```

```js
<Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
```

```js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setconfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    if (confirmed) {
      confirmedOutput = <Text>Your choosen Number is {selectedNumber}</Text>;
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
```

# Showing alert

```js
const confirmInputHandler = () => {
  const chosenNumber = parseInt(enteredValue);
  if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
    Alert.alert(
      "Invalid number!",
      "Number has to be a number between 1 and 99.",
      [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
    );
    return;
  }
  setConfirmed(true);
  setSelectedNumber(chosenNumber);
  setEnteredValue("");
  Keyboard.dismiss();
};
```

- React Native provide this tool

- Import it.

```js
Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
  { text: "Okay", style: "destructive", onPress: resetInputHandler },
]);
```

# Adding Custom Fonts

1. In your assets folder create a folder called fonts
2. Download your preferred fonts and paste it there
3. Go to your App.js and instruct Expo and React native to load these files
4. Import as `js import * as Font from 'expo-font'`
5. Create a function for this

```js
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
```

6. Import a component from expo to load the font

## Adding Local image

```js
<Image
  source={require("../assets/success.png")}
  style={styles.image}
  resizeMode="cover"
/>
```

## Load image from an external site

```js
<Image
  // source={require('../assets/success.png')}
  source={{
    uri:
      "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
  }}
  style={styles.image}
  resizeMode="cover"
/>
```
