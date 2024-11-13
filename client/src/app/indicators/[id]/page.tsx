import Article1Content from "@/components/indicators/Article1Content";
import Indicator1Content from "@/components/indicators/Indicator1Content";
import React from "react";


interface Article {
    id: number;
    title: string;
    description: string;
    content: React.ReactNode;
}

// Define your static data array with each item having a component for its content
const articles: Article[] = [
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



const page = ({ params: { id } }: { params: { id: string } }) => {

    const getArticleById = (id: number): Article | undefined => {
        return articles.find((article: any) => article.id === Number(id));
    };

    const articleId = typeof id === 'string' ? parseInt(id) : NaN;
    const article = getArticleById(articleId);

    if (!article) {
        return <div>Article not found</div>;
    }

    return <div className="p-4">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <div>{article.content}</div>
    </div>
};

export default page;
