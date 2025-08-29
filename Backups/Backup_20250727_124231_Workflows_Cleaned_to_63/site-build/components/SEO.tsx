'use client';

import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
}

export default function SEO({ title, description }: SEOProps) {
    useEffect(() => {
        if (title) {
            document.title = `${title} | Future of Finance`;
        }

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            }
        }
    }, [title, description]);

    return null;
} 