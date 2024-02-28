import { useState } from "react";
import useSWR from "swr";

export function useGithubUser() {
    const [input, setInput] = useState("");

    function handleChangeInput(event) {
        setInput(event.target.value);
    }

    function handleSubmitButton(event) {
        event.preventDefault();
    }

    const { data: userData, error, isValidating: loading } = useSWR(
        input ? `https://api.github.com/users/${input}` : null
    );

    return {
        userData,
        loading: !userData && loading,
        error,
        input,
        handleChangeInput,
        handleSubmitButton
    };
}
