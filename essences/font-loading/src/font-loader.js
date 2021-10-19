export default async () => {
    // If either the fonts API is not supported or the fonts are already preloaded,
    // treat them as fully loaded
    if (!('fonts' in document) || sessionStorage.fontsPreloaded) {
        document.body.classList.add('fonts-loaded');
        return;
    }

    // Wait for the critical fonts to be loaded.
    await Promise.all([
        document.fonts.load('700 1em "Lato"'),
        document.fonts.load('400 1em "Lato"'),
    ]);

    document.body.classList.add('fonts-loaded');
    sessionStorage.fontsPreloaded = true;
};
