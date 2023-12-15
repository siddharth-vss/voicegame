
// const App = () => {

import { all } from "q";

 
// const SpeechRecognition = 
// window.SpeechRecognition || window.webkitSpeechRecognition;

//   return (
//    <>
//      <div>
//        Hello 
//      </div>
//      <button >start</button>
//    </>
//   )
// }

// export default App








const App = () => {

  let mst=`  he prabhu ,.
  he hari ram!. krishna jaganath premanand .
  ye kya hua ?
  gamcha bhi khul gaya.
`;

  var msg = new SpeechSynthesisUtterance(mst);
  const allVoice = speechSynthesis.getVoices();
  console.log(allVoice); 
  msg.voice = allVoice[12];
  return (
   <>
     <div>
       Hello 
     </div>
     <button onClick={()=>
    window.speechSynthesis.speak(msg)}>start</button>
   </>
  )
}

export default App
