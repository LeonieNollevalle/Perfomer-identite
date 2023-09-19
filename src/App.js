import "./styles.css";
export default function App() {

let words = ["1","2","3","4","5","6","7","8","9"]; 
let tableLength = words.length;

  let tableau = []; 
  for (let i = 0 ; i < tableLength ; i++) {
  let max = words.length - 1;
  let min = 0;
  
  let wordIndex = Math.round(Math.random() * (max - min) + min); 
  tableau.push(words[wordIndex])  
  words.splice(wordIndex, 1);
}

const bg = ["","https://images.unsplash.com/photo-1581783458534-001a466b5487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3115&q=80","https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3097&q=80","https://images.unsplash.com/photo-1511974212900-b42a18e19eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2848&q=80","https://images.unsplash.com/photo-1532579821608-3f220ab206e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80" ]

let num = Math.round(Math.random() * (bg.length - 1) + 1);
console.log(tableau)

  return (
    <div className="global-container">
    <div className="App" style={{backgroundImage:`url(${bg[num]})`}}>
      <svg className={`num-${tableau[0]}`} width="74" height="74" stroke-width="1" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_102_6)">
        <path d="M73 1H1V73H73V1Z" stroke="re" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M37 19V55" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M73 1H1V73H73V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>

        </g>
        <defs>
        <clipPath id="clip0_102_6">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <svg className={`num-${tableau[1]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_102_9)">
        <path d="M1 1H19H73V73H1V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        <path d="M28 73V37" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M37 37V1" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M46 73V37" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_102_9">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg className={`num-${tableau[2]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_14)">
        <path d="M28 73V37" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M46 37V1" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M73 1H1V73H73V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_103_14">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg className={`num-${tableau[3]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_18)">
        <path d="M1 1H73V28V73H1V28V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        <path d="M73 28H1" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_103_18">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <svg className={`num-${tableau[4]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_21)">
        <path d="M1 1H73V37V73H1V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        <path d="M37 37H73" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_103_21">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg className={`num-${tableau[5]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_24)">
        <path d="M1 1H73V28V73H1V28V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        <path d="M73 28H1" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_103_24">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <svg className={`num-${tableau[6]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_27)">
        <path d="M1 1H73V28V73H1V28V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        <path d="M1 46H19V73" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M73 46H55V73" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_103_27">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg className={`num-${tableau[7]}`} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_31)">
        <path d="M1 46H19V73" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M73 46H55V73" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        <path d="M1 1H73V28V73H1V28V1Z" stroke="white" stroke-width="0" stroke-miterlimit="10"/>
        <path d="M37 1V37" stroke="white" stroke-width="1" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_103_31">
        <rect width="74" height="74" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <div className={`num-${tableau[8]} omnicity`}>Omnicity</div>
    </div>
    <div className="d" onClick={() => window.location.reload()}>↺</div>
    </div>
  );
}
