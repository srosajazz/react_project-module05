import React, { Component } from "react";
import api from "../../services/api";

// import { Container } from './styles';

export default class Repository extends Component {
    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);
        /**
         * call to the api for url:
         *  https://github.com/microsoft/vscode/issues
         *  const response = await api.get(`/repos/${repoName}`); // bad option
         * const issues = await api.get(`/repos/${repoName}/issues`);
         *
         */
        //better option for call all api
        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`),
        ]);

        console.log(repository);
        console.log(issues);
    }
    render() {
        return <h1>Repository</h1>;
    }
}
