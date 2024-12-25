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

const createMetadata = (images, title) => {
    return Object.keys(images).map((imageName, index) => {
        const imagePath = images[imageName];
        if (typeof imagePath !== 'string') {
            console.error(`Invalid imagePath at index ${index}:`, imagePath);
        }
        return {
            key: index,
            title: title,
            imagePath: typeof imagePath === 'string' ? imagePath : '',
            alt: `${title} pic ${index + 1}`,
        };
    });
};

export const Volume1Metadata = createMetadata(firstEditionImages, "First Edition");
export const Volume2Metadata = createMetadata(secondEditionImages, "Second Edition");
export const Volume3Metadata = createMetadata(thirdEditionImages, "Third Edition");