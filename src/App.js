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


console.log(tableau)

  return (
    <div className="global-container">
    <div className="App">
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
