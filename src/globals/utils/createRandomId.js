export default function createRandomId() {
    const id = Math.random().toString(36).substr(2, 6);
    return id
}
