import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditTransactions({ navigation, route }) {
  const { transaction, type } = route.params;
  const [Amt, onChangeAmt] = React.useState(transaction.amount);
  const [title, onChangeTitle] = React.useState(
    transaction.title || transaction.name
  );
  const [details, onChangeDetails] = React.useState(transaction.description);
  //   const [amount, setAmount] = useState(0);
  //   console.log(transaction);
  let color;
  if (type == "Income") color = "#00A86B";
  if (type == "Lent" || type == "Borrowed") color = "#0077FF";
  if (type == "Expense") color = "#FD3C4A";
  let placeholder;
  if (type == "Income") placeholder = "Title";
  if (type == "Lent") placeholder = "Borrower's name";
  if (type == "Expense") placeholder = "Title";
  if (type == "Borrowed") placeholder = "Lender's name";
  const handleEdit = async () => {
    if (type == "Income") {
      const data = JSON.parse(await AsyncStorage.getItem("@incomes"));
      if (data !== null) {
        data.map((obj) => {
          if (
            obj.title == transaction.title &&
            obj.amount == transaction.amount &&
            obj.description == transaction.description
          ) {
            (obj.title = title),
              (obj.amount = Number(Amt)),
              (obj.description = details);
          }
        });
        await AsyncStorage.setItem("@incomes", JSON.stringify(data));
      }

      navigation.navigate("Income");
    }
    if (type == "Expense") {
      const data = JSON.parse(await AsyncStorage.getItem("@expenses"));
      if (data !== null) {
        data.map((obj) => {
          if (
            obj.title == transaction.title &&
            obj.amount == transaction.amount &&
            obj.description == transaction.description
          ) {
            (obj.title = title),
              (obj.amount = Number(Amt)),
              (obj.description = details);
          }
        });
        await AsyncStorage.setItem("@expenses", JSON.stringify(data));
      }

      navigation.navigate("ExpensesScreen");
    }
    if (type == "Lent") {
      const data = JSON.parse(await AsyncStorage.getItem("@moneyLent"));
      if (data !== null) {
        data.map((obj) => {
          if (
            obj.name == transaction.name &&
            obj.amount == transaction.amount &&
            obj.description == transaction.description
          ) {
            (obj.name = title),
              (obj.amount = Number(Amt)),
              (obj.description = details);
          }
        });
        await AsyncStorage.setItem("@moneyLent", JSON.stringify(data));
      }

      navigation.navigate("Debt");
    }
    if (type == "Borrowed") {
      const data = JSON.parse(await AsyncStorage.getItem("@moneyBorrowed"));
      if (data !== null) {
        data.map((obj) => {
          if (
            obj.name == transaction.name &&
            obj.amount == transaction.amount &&
            obj.description == transaction.description
          ) {
            (obj.name = title),
              (obj.amount = Number(Amt)),
              (obj.description = details);
          }
        });
        await AsyncStorage.setItem("@moneyBorrowed", JSON.stringify(data));
      }
      navigation.navigate("BorrowScreen");
    }
  };
  const inputAmt = (
    <TextInput
      style={{ ...styles.input, fontSize: 50, color: "#ffffff" }}
      onChangeText={onChangeAmt}
      value={parseInt(Amt)}
      placeholder="0.00"
      keyboardType="numeric"
      placeholderTextColor={"#fc8991"}
    />
  );

  const inputTitle = (
    <TextInput
      style={{
        ...styles.input,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: "#d3d3d9",
      }}
      onChangeText={onChangeTitle}
      value={title || transaction.name}
      placeholder={placeholder}
      placeholderTextColor="#d3d3d9"
      keyboardType="text"
    />
  );

  const inputDetails = (
    <TextInput
      style={{
        ...styles.input,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: "#d3d3d9",
      }}
      onChangeText={onChangeDetails}
      value={details}
      placeholder="Enter Details Here..."
      placeholderTextColor="#d3d3d9"
      keyboardType="text"
    />
  );
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 25, height: 25 }}
        >
          <Image
            source={require(`../assets/white_left_arrow.png`)}
            style={{ width: 25, height: 25 }}
          ></Image>
          {/* <Text style={{ color: "#fff" }}>Back</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.tasksWrapper}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {type == "Income" && (
              <Text style={styles.sectionTitle}>Edit Income</Text>
            )}
            {type == "Lent" && (
              <Text style={styles.sectionTitle}>Edit Transfer</Text>
            )}
            {type == "Borrowed" && (
              <Text style={styles.sectionTitle}>Edit Transfer</Text>
            )}
            {type == "Expense" && (
              <Text style={styles.sectionTitle}>Edit Expense</Text>
            )}
          </View>
          <View>
            <View>
              <Text style={styles.howMuch}>Amount</Text>
            </View>
            <View style={styles.inputDebt}>
              <Text style={{ fontSize: 50, color: "#ffffff" }}>Rs.</Text>
              <View>{inputAmt}</View>
            </View>
          </View>
        </View>
        <View style={styles.WhiteCont}>
          <View>
            <View style={styles.inputPlace}>{inputTitle}</View>

            <View style={styles.inputPlace}>{inputDetails}</View>
          </View>
          <View style={styles.submit}>
            <View style={styles.addButton}>
              <TouchableOpacity onPress={handleEdit}>
                <Text style={{ fontWeight: "bold", color: "#ffffff" }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 15,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
    height: 70,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 10,
  },
  WhiteCont: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    bottom: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: "60%",
    // justifyContent: "space-between"
  },
  tasksWrapper: {
    flex: 1,
    height: "70%",
  },
  sectionTitle: {
    // flex: 1,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    // width:"70%",
    textAlign: "center",
  },
  inputDebt: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    color: "#ffffff",
  },
  cardContainer: {
    height: 200,
  },
  addButton: {
    // elevation: 100,
    // marginTop: 40,
    marginHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 10,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7f3dff",
    color: "#ffffff",
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    padding: 5,
  },
  howMuch: {
    color: "#e9e7e6",
    paddingLeft: 10,
    fontSize: 25,
  },
  inputPlace: {
    color: "#8f9ca2",
    fontSize: 22,
    paddingBottom: 3,
    paddingTop: 20,
  },
  submit: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});
