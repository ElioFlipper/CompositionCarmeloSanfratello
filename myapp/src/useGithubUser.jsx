import { useState } from "react";
import useSWR, { SWRConfig } from "swr";

export function useGithubUser() {
    const [input, setInput] = useState("");

    function handleChangeInput(event) {
        setInput(event.target.value);
    }

    function handleSubmitButton(event) {
        event.preventDefault();
        // No need to call getData here, SWR will handle it automatically
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

const defaultFetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};

export function App() {
    return (
        <SWRConfig value={{ fetcher: defaultFetcher }}>
            <YourComponent />
        </SWRConfig>
    );
}
