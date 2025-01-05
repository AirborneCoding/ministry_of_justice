"use client";

import React, { useState } from "react";

const SearchBox: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className="flex-1">
            <input
                type="text"
                className="w-full input input-bordered input-xl"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search publications..."
            />
        </form>
    );
};

export default SearchBox;
