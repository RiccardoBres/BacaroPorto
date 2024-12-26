const importAllImages = (context) => {
    const images = {};
    context.keys().forEach((item) => {
        const image = context(item);
        images[item.replace('./', '')] = image.default || image; // Assicurati che sia una stringa
    });
    return images;
};

const firstEditionImages = importAllImages(require.context("../../../Layout/Assets/Volume1", false, /\.(png|jpe?g|svg)$/));
const secondEditionImages = importAllImages(require.context("../../../Layout/Assets/Volume2", false, /\.(png|jpe?g|svg)$/));
const thirdEditionImages = importAllImages(require.context("../../../Layout/Assets/Volume3", false, /\.(png|jpe?g|svg)$/));

const createMetadata = (images, titles) => {
    return Object.keys(images).map((imageName, index) => {
        const imagePath = images[imageName];
        if (typeof imagePath !== 'string') {
            console.error(`Invalid imagePath at index ${index}:`, imagePath);
        }

        // Usa il titolo corrispondente o un fallback generico
        const title = titles[index] || `Untitled ${index + 1}`;
        return {
            key: index,
            title: title,
            imagePath: typeof imagePath === 'string' ? imagePath : '',
            alt: `${title} pic ${index + 1}`,
        };
    });
};

// Array di titoli specifici per ciascuna raccolta di immagini
const Volume1Titles = ["Baccalà", "Mozzarella e Pomodorini", "Bruschetta"];
const Volume2Titles = ["Landscape", "Sunset", "Mountain"];
const Volume3Titles = ["Forest", "Beach", "Desert"];

// Genera i metadati con titoli specifici
export const Volume1Metadata = createMetadata(firstEditionImages, Volume1Titles);
export const Volume2Metadata = createMetadata(secondEditionImages, Volume2Titles);
export const Volume3Metadata = createMetadata(thirdEditionImages, Volume3Titles);
