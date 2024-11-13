import React from "react";
import Article1Content from "./Article1Content";
import Indicator1Content from "./Indicator1Content";
import Link from "next/link";
import Card from "./Card";


// Define the type for each item
interface Item {
    id: number;
    title: string;
    description: string;
    content: React.ReactNode;
}

// Define your static data array with each item having a component for its content
const items: Item[] = [
    {
        id: 1,
        title: 'Article 1',
        description: 'This is the description for Article 1.',
        content: <Article1Content />
    },
    {
        id: 2,
        title: 'Indicator 1',
        description: 'This is the description for Indicator 1.',
        content: <Indicator1Content />
    },
    // Add more items as needed
];

const IndicatorsPage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Static Articles & Indicators</h1>
            {items.map((item) => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        title={item.title}
                    />
                    // <div key={item.id} className="my-4 p-4 border rounded-md">

                    //     <h2 className="text-xl font-semibold">
                    //         <Link href={`/indicators/${item.id}`}>
                    //             {item.title}
                    //         </Link>
                    //     </h2>
                    //     <p className="text-gray-700">{item.description}</p>
                    //     <div className="mt-2">
                    //         {item.content}
                    //     </div>
                    // </div>
                )
            })}
        </div>
    )
};

export default IndicatorsPage;
