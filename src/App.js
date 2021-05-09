import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Clients from './components/clients/Clients';
import Spinner from './components/spinner/Spinner';
import { connect } from 'react-redux';



function App(props) {

  if (props.errorMessage) {
    toast.error(props.errorMessage)
  }
  if (props.successMessage) {
    toast.success(props.successMessage)
  }
  return (
    <div className="App">
      <Clients />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {props.loading && <Spinner />}
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
    successMessage: state.successMessage,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App)
