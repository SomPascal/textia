function truncate(text: string, maxLength: number = 255, suffix: string = '...'): string {
    if (text.length <= maxLength) {
        return text;
    }

    if (maxLength <= suffix.length) {
        return suffix.substring(0, maxLength);
    }

    const truncatedText = text.substring(0, maxLength - suffix.length);

    return truncatedText + suffix;
}

export {
    truncate
}