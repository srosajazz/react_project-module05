import React, { Component } from "react";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";

import api from "../../services/api";
import { Container, Form, SubmitButton } from "./styles";

export default class Main extends Component {
    // store
    state = {
        newRepo: "",
        repository: [],
        loading: false,
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };
    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repository } = this.state;

        const response = await api.get(`/repos/${newRepo}`);

        //save data from github api
        const data = {
            name: response.data.full_name,
        };

        this.setState({
            repository: [...repository, data],
            newRepo: "",
            loading: false,
        });
    };

    render() {
        const { newRepo, loading } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repository
                </h1>

                {/* Form for the App. */}
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add git repository"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
