import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async () => {
const jateDb = await openDB('jate', 1);
const texas = jateDb.transaction('jate', 'readwrite');
const storeit = texas.objectStore('jate');
const requestit = storeit.add({});
const result = await requestit;
  console.log('🚀 - SAVED in the database', result);
  
}






// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
const request = storeit.getAll();
const results = await request;
  console.log('result.value', results);
 




initdb();
}
