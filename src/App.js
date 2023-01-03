import ExpenseItem from "./components/ExpenseItem";
import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 30.21, date: new Date(2021, 2, 18) },
    { title: "Dental ", amount: 1.21, date: new Date(2021, 2, 21) },
    { title: "Grocery", amount: 303.21, date: new Date(2021, 2, 22) },
  ];

  return (
    <div className="App">
      <ExpenseItems expenses={expenses}></ExpenseItems>
    </div>
  );
}

export default App;
