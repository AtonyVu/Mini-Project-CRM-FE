import ListUser from "./Component/ListUser";
import Modal from "./Component/Modal";
import ModalSendMail from "./Component/Modal/SendMailModal";

function App() {
  return (
    <div className="App">
      <Modal />

      <ListUser />
    </div>
  );
}

export default App;
