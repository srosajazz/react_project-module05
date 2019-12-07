import React from "react";
import { FaGithubAlt, FaPlus } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repository
            </h1>

            {/* Form for the App. */}
            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Add git repository" />
                <SubmitButton disabled>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}

//numbers would be ints,
//negative, will I be returning a string or number
