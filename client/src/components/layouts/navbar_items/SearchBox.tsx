"use client"

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ search }: { search: string }) => {

    const locale = useLocale()
    const [query, setQuery] = useState("");
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const encodedQuery = encodeURI(query)

        if (encodedQuery !== '') {
            router.push(`/${locale}/search?q=${encodedQuery}`)
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="relative flex items-center gap-2 bg-white rounded-full input input-sm lg:input-sm input-bordered ">
                <input
                    type="text"
                    className="text-black grow lg:w-auto xl:w-96"
                    placeholder={`${search}...`}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit" className="focus:outline-none hover:text-gray-700">
                    <FaSearch size={20} />
                </button>
            </label>
        </form>
    )
};

export default SearchBox;