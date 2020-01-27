export default function getSnapshotArray(snapshot) {
    const response = []
    snapshot.forEach(doc =>  {
        response.push(doc.data())
    })
}
