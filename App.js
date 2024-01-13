import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./Screens/Dashboard";
import IncomeScreen from "./Screens/IncomeScreen";
import AddIncome from "./Screens/AddIncome";
import AddReceipts from "./Screens/AddReceipts";
import IncomeDetail from "./Screens/IncomeDetail";
import TransactionDetails from "./Screens/TransactionDetails";
import EditTransactions from "./Screens/EditTransactions";
import ExpensesScreen from "./Screens/ExpensesScreen";
import AddExpenses from "./Screens/AddExpenses";
import DebtScreen from "./Screens/DebtScreen";
import DebtorDetail from "./Screens/DebtorDetail";
import AddDebt from "./Screens/AddDebt";
import AddBorrow from "./Screens/AddBorrow";
import BorrowDetails from "./Screens/BorrowDetails";
import BorrowScreen from "./Screens/BorrowScreen";
import Profile from "./Screens/Profile";
import Receipts from "./Screens/Receipts";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Income"
          component={IncomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddIncome"
          component={AddIncome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="IncomeDetail"
          component={IncomeDetail}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TransactionDetails"
          component={TransactionDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditTransactions"
          component={EditTransactions}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ExpensesScreen"
          component={ExpensesScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddExpenses"
          component={AddExpenses}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Debt"
          component={DebtScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddDebt"
          component={AddDebt}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DebtorDetail"
          component={DebtorDetail}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BorrowScreen"
          component={BorrowScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BorrowDetails"
          component={BorrowDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddBorrow"
          component={AddBorrow}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Receipts"
          component={Receipts}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddReceipts"
          component={AddReceipts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currenHeight,
  },
});
