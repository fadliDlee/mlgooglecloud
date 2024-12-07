const { Firestore } = require('@google-cloud/firestore');

async function getAllData() {
    const db = new Firestore();
    const predictCollection = db.collection('predictions');
    
    const allData = await predictCollection.get();
    
    console.log("All data fetched: ", allData.docs.map(doc => doc.data()));
    
    return allData;
}

module.exports = getAllData;