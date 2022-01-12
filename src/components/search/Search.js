import React, { useState } from "react";
import "./Search.scss";
import Select from "react-select";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getClients } from "../../store/actions";

function Search(props) {
  const sortOptions = [
    {
      label: "A-Z",
      value: "a-z",
    },

    {
      label: "Z-A",
      value: "z-a",
    },
  ];

  let [search, setSearch] = useState("");
  let [sort, setSort] = useState("");

  const handleSubmit = () => {
    const data = {};
    if (search) data.search = search;
    if (sort) data.sort = sort;
    props.getClients(data);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const sortHandleChange = (e) => {
    if (e) {
      setSort(e.value);
      const data = { sort: e.value };
      props.getClients(data);
    } else {
      setSort("");
      props.getClients();
    }
  };

  return (
    <div className="advanced">
      <div className="search">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <InputGroup.Append>
            <Button onClick={handleSubmit} variant="outline-primary">
              <FontAwesomeIcon icon={faSearch} color="#210794" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="sort">
        <Select
          placeholder="Sort"
          options={sortOptions}
          isClearable={true}
          isSearchable={false}
          onChange={sortHandleChange}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getClients,
};

export default connect(null, mapDispatchToProps)(Search);
