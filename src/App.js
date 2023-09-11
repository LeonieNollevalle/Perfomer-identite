import { useState,useEffect } from 'react';
import './App.css';
import { db } from "./firebase-config";
// import { uid } from "uid";
import { set, ref, onValue} from "@firebase/database";
import Letter from './Letter';


function App() {
  // const [form, setForm] = useState (false)
  const [ideas, setIdeas] = useState ([])
  // const [adress, setAdress] = useState('')
  // const [code, setCode] = useState('')
  // const [categorie, setCategorie] = useState('')
  // const [title, setTitle] = useState('')
  // const [exple, setExple] = useState('')
  const [ projet, setProjet ] = useState (0)


  

// Read
  useEffect (() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      if (data != null){
        Object.values(data).map((name) => (
          setIdeas(oldArray => [...oldArray, name])
    ))
      }
    })
  },[]);
 

  console.log(ideas)
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
const color = ['','red','red'];

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
         
           <div className="w-full flex  flex-col items-end justify-between">
           <ul className="w-1/2  pt-10">
             <li className="pb-3 underline">Omnicity</li>
             {ideas.map((idea)=> (
               <ul>
                <li className="pl-3 flex gap-3 items-center cursor-pointer" onClick={() => setProjet(idea.id)}>{idea.title ? idea.title : "coucou"}<p className="text-lg font-bold "> {idea.id === projet ? '→' : ''}</p></li>
               </ul>
             ))}
             
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
            <p className='text-sm pt-5'>Omnicity est une entreprise d’architecture qui propose des aménagements d’intérieure virtuelle destiné aux agences immobilières dans le but de les aidés à vendre leur bien. Elle est ici utilisée comme support d’expérimentation d’une identité visuelle généré à partir de programme informatique. Afin de mener à bien cette expérimentation, un jeu de caractère modulaire a été créé au préalable afin de composer le nom de l’entreprise. <br/> Ces lettres prennent l’apparence de plan d’architecture en référence à l’activité principale de l’entreprise qui consiste à réaliser des plans d’aménagement, des lettres qui ne permettent pas dans un premier de distinguer le nom de l’entreprise surtout si elles sont disposées de manière à brouiller la lecture de ces dernières. De plus, chacune des lettres est pensée à partir d’une grille commune à toute, tout comme en architecture des modules sont utilisé pour composer l’espace et le positionnement des lettres. </p>
            <Letter/>
            <h3 className="pt-5 flex gap-3 items-center">{ideas[projet] ? ideas[projet].title : "coucou"}<p className="text-lg font-bold ">→</p></h3>
            <p className="text-sm pt-2">{ideas[projet] ? ideas[projet].exple :''}</p>
         </div>
      </div>
      
      <div className="w-1/2 h-full p-3 ">
        <h2 className="italic flex gap-3">{ideas[projet] ? ideas[projet].title : "coucou"} <p className="text-lg font-bold not-italic ">↓</p></h2>
        <div className="w-full h-1/2 flex justify-center items-center mt-3" style={{ border:`1px solid ${chooseColor()}`}}>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src={ideas[projet] ? ideas[projet].adress : "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"}
          >
          </iframe>   
        </div>
      </div>

    </div>
  );
}

export default App;
