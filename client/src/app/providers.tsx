'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkeletonTheme } from "react-loading-skeleton";

const Providers = ({ children }: { children: React.ReactNode }) => {
    // const [queryClient] = useState(() => new QueryClient({
    //     defaultOptions: {
    //         queries: {
    //             staleTime: 60 * 1000 * 5, // 5 minutes
    //         },
    //     },
    // }));

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        staleTime: 60000,
                        refetchInterval: 60000,
                        networkMode: "online"
                    },
                },
            })
    );

    return (
        <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc">
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </SkeletonTheme>
    );
};

export default Providers;
