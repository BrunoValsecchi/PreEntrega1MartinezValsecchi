import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {


  return (
    <div>
      <Navbar />;
      <div><ItemListContainer greeting={'Martinez camisetas'}/></div>
      
    </div>
  );
}

export default App;
