export const cropText = (text, size) => {
    if (text.length <= size) {
        return text;
    } else {
        return text.substr(0, size) + "...";
    }
}