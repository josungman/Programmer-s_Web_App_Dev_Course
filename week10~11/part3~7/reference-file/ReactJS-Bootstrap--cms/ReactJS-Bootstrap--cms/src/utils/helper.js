export const getPreview = (file, callback) => {
    if (typeof file === 'string') {
        return callback(file);
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
};

export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataUnit = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const fileSizeValidation = (size, byte, multiNum = 1) => {
    const unit = dataUnit.indexOf(byte);
    const maxSize = Math.pow(1024, unit) * multiNum;
    return !unit || maxSize < size;
};
