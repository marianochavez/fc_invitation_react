import { initializeApp } from 'firebase/app'
import { doc, collection, getDocs, getFirestore, addDoc, query, where, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAMFSxmRey3dXmOGwbr4_Eh-t2VJMMXbbs',
  authDomain: 'pichi-fc.firebaseapp.com',
  projectId: 'pichi-fc',
  storageBucket: 'pichi-fc.appspot.com',
  messagingSenderId: '863207538437',
  appId: '1:863207538437:web:74d4f036e0be14afdec16c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getFamilies () {
  const families = []
  const familiesCol = collection(db, 'families')
  const familiesSnapshot = await getDocs(familiesCol)
  familiesSnapshot.forEach(doc =>
    families.push({
      ...doc.data()
    })
  )
  return families
}

export async function getFamily (name) {
  const familyRef = collection(db, 'families')
  const q = query(familyRef, where('name', '==', name))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data())
  })
  return querySnapshot
}

export async function addFamily (family, quantity) {
  const familiesCol = collection(db, 'families')
  const familyDoc = await addDoc(familiesCol, {
    name: family,
    quantity
  })
  return familyDoc
}

export async function updateFamily (id, family, quantity) {
  const famiyRef = doc(db, 'families', id)
  const updated = await updateDoc(famiyRef, {
    name: family,
    quantity
  })
  return updated
}
