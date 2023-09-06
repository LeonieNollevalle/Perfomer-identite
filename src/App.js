import { useState,useEffect } from 'react';
import './App.css';
import { db } from "./firebase-config";
import { uid } from "uid";
import { set, ref, onValue} from "@firebase/database";


function App() {
  // const [form, setForm] = useState (false)
  const [ideas, setIdeas] = useState ([])
  const [adress, setAdress] = useState('')
  const [code, setCode] = useState('')
  const [categorie, setCategorie] = useState('')
  const [title, setTitle] = useState('')
  const [exple, setExple] = useState('')



console.log(ideas)

// Read
  useEffect (()=> {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      
      if (data !== null){
        Object.values(data).map(name => (
          setIdeas(oldArray => [...oldArray, name])
    ))
      }
    })
  }, []);

// write
// const writeToDatabase = () => {
//   const uuid = uid();
//   set(ref(db, `/${uuid}`), {
//     code,
//     adress,
//     exple,
//     title,
//     categorie,
//     uuid,
//   });
//   setCode("");
//   setAdress("");
//      setExple("");
//      setCategorie("");
//      setTitle("");
//   setForm(false)
// };
const font = ['','serif', 'sans-serif'];
const color = ['','red','blue'];
const chooseColor = () => {
 return color[Math.floor(Math.random() * (2 - 1 + 1)) + 1]
}
  return (
    <div className="w-screen h-screen flex" style={{ fontFamily:`${font[Math.floor(Math.random() * (2 - 1 + 1)) + 1]}`,color:`${chooseColor()}`}}>
      <div className="w-1/2 p-3 flex gap-5">
         <div className="w-1/2 h-full">
          <div className="w-full h-1/2">
            <h1 className="text-xl">Performer l'identité</h1>
            <p className="text-sm pt-5 flex flex-col"> Explication du projet A lighthearted mixture of generalities, carefully distilled. A delightful collection of the slightly scattered and mostly sweet.  Why bury? How are myself?  To catch a glimpse of intimacy, to stay, just a minute longer. There are no simple answers, or? <p className="text-lg font-bold text-end ">↓</p></p>
          </div>
         
           <div className="w-full flex  flex-col items-end justify-between ">
           <ul className="w-1/2  pt-10">
             <li className="pb-3 underline">Omnicity</li>
             {}
             <ul>
             <li className="pl-3 flex gap-3 items-center">Logo aléatoire 1.0 <p className="text-lg font-bold ">→</p></li>
             </ul>
           </ul>
           {/* <ul className=" pt-10">
             <li className="pb-3 underline">GJ</li>
             <ul>
             <li className="pl-3">Interaction 1.0 </li>
             <li className="pl-3">Interaction 1.1 </li>
             <li className="pl-3">Interaction 1.2 </li>
             <li className="pl-3">Interaction 2.0 </li>
             </ul>
           </ul> */}
           </div>
         </div>
         <div className="w-1/2">
           <h2 className="italic">Omnicity</h2>
            <p className='text-sm pt-5'>Explication de ce qu'est ominicity et de pourquoi il a été choisie</p>
            <h3 className="pt-5 flex gap-3 items-center">Logo Aléatoire 1.0 <p className="text-lg font-bold ">→</p></h3>
            <p className="text-sm pt-2">Explication hyper intéressante sur ce qui a été mener comme recherche. Ça viens de tel référence artistique nanani nanana</p>
         </div>
         
      </div>
      
      <div className="w-1/2 h-full p-3 ">
        <h2 className="italic flex gap-3">Logo Aléatoire 1.0 <p className="text-lg font-bold not-italic ">↓</p></h2>
        <div className="w-full h-1/2 flex justify-center items-center" style={{ border:`1px solid ${chooseColor()}`}}>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src={ideas[0] ? ideas[0].adress : "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"}
          >
          </iframe>   
        </div>
      </div>

    </div>
  );
}

export default App;
