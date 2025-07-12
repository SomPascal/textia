import conversions from "../config/conversions";

function convertText(text: string, style: string) {
    if (!conversions[style]) {
        console.warn(`Style "${style}" not found.`);
        return text;
    }

    let converted = '';
    for (const char of text) {
        converted += conversions[style][char] || char;
    }
    return converted;
}

export {
    convertText
}