import { useState, useEffect, useCallback } from 'preact/hooks';

function useClipboard() {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const copy = useCallback((textToCopy: string) => {
        setError(null);
        try {

            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand('copy');

            document.body.removeChild(textarea);

            setIsCopied(true);
        } catch (err) {
            console.error('Failed to copy text:', err);
            setError('Failed to copy text. Please try again.');
            setIsCopied(false);
        }
    }, []);

    useEffect(() => {
        if (isCopied) {
            const timeoutId = setTimeout(() => {
                setIsCopied(false);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [isCopied]);

    return { copy, isCopied, error };
}

export default useClipboard