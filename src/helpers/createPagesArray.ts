export const createPagesArray = (totalPages: number) => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
}