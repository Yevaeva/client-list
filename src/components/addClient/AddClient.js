import React, { createRef } from "react";
import "./AddClient.scss";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addClient, addProvider } from "../../store/actions";
import { toast } from "react-toastify";
import ProviderList from "../providerList/ProviderList";
import { Formik } from "formik";
import { clientAddValidationSchema } from "../../helperFunc/validation";
class AddClient extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = createRef();

    this.state = {
      name: "",
      email: "",
      phone: "",
      newProvider: "",
      selectedProviders: new Set(),
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = (event, type) => {
    this.setState({
      [type]: event.target.value,
    });
  };

  handleCheck = (e) => {
    const selectedProviders = new Set(this.state.selectedProviders);
    if (selectedProviders.has(e.target.name)) {
      selectedProviders.delete(e.target.name);
    } else {
      selectedProviders.add(e.target.name);
    }
    this.setState({
      selectedProviders,
    });
  };

  addProvider = () => {
    let { newProvider } = this.state;
    let { providerList } = this.props;
    let reapeted = providerList.find((prov) => {
      return prov.name === newProvider;
    });

    if (newProvider.trim() && reapeted === undefined) {
      this.props.addProvider({ name: this.state.newProvider.trim() });
      this.setState({
        newProvider: "",
      });
    } else if (reapeted) {
      toast.error("Provider must be unique ❗❗❗");
    }
  };

  addClient = (values) => {
    const providers = [...this.state.selectedProviders].map((p) => {
      return { name: p };
    });
    const data = {
      name: values.name,
      email: values.email,
      phone: +values.phone,
      providers,
    };
    this.props.addClient(data);
    this.props.onClose();
  };
  render() {
    const { onClose } = this.props;
    return (
      <div>
        <Modal dialogClassName="size" centered show={true} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Client</Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={clientAddValidationSchema}
            onSubmit={(values) => this.addClient(values)}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              errors,
            }) => {
              return (
                <div>
                  <Modal.Body>
                    <div className="inputs">
                      <input
                        ref={this.inputRef}
                        type="text"
                        placeholder="Name *"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <Form.Text
                        className={
                          touched.name && errors.name
                            ? "text-danger mx-3"
                            : "d-none mx-3"
                        }
                      >
                        {errors.name}
                      </Form.Text>
                      <input
                        type="email"
                        placeholder="Email *"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <Form.Text
                        className={
                          touched.email && errors.email
                            ? "text-danger mx-3"
                            : "d-none mx-3"
                        }
                      >
                        {errors.email}
                      </Form.Text>
                      <input
                        type="text"
                        placeholder="Phone *"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      <Form.Text
                        className={
                          touched.phone && errors.phone
                            ? "text-danger mx-3"
                            : "d-none mx-3"
                        }
                      >
                        {errors.phone}
                      </Form.Text>
                      <div className="addProvider">
                        <input
                          type="text"
                          placeholder="Providers"
                          value={this.state.newProvider}
                          onChange={(event) =>
                            this.setState({
                              newProvider: event.target.value,
                            })
                          }
                        />
                        <Button onClick={this.addProvider}>Add provider</Button>
                      </div>
                    </div>
                    <div className="providerList">
                      {this.props.providers.map((provider) => {
                        return (
                          <div key={provider._id}>
                            <ProviderList
                              provider={provider}
                              handleCheck={this.handleCheck}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" className="butn" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                      Add Client
                    </Button>
                  </Modal.Footer>
                </div>
              );
            }}
          </Formik>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    providerList: state.providerList,
  };
};

const mapDispatchToProps = {
  addProvider,
  addClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
