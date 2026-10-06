import {useState} from "react";

export default function Sg(){
  const [ops,setOps]=useState(0);
  const [calc,setCalc]=useState(false);
  const [sg,setSg]=useState<number>(0);
  const [courses,setCourses]=useState("");
  const [gp,setGp]=useState<number[]>([]);
  const [creds,setCreds]=useState<number[]>([]);

  function getSg(){
    let tot=0;
    let cred=0;
    for(let i=0;i<gp.length;i++){
      tot+=gp[i]*creds[i];
      cred+=creds[i];
    }
    console.log(cred);
    const sg=tot/cred
    setSg(sg);
    setCalc(true);
  }

  return (
    <>
    <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl shadow-indigo-100 border border-white p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-1">
              Expected SGPA
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-5">
              Add each course's expected grade point and credits
            </p>
            
            {ops==0 && 
              <input
                type="number"
                value={courses}
                placeholder="Number of courses"
                className="w-1/2 px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-sm"
                onChange={(event)=>{
                  setCourses(event.target.value);
                }}
                onKeyDown={(event)=>{
                  if(event.key==="Enter"){
                    setOps(Number(courses));
                  }
                }}
              />
            }
            <div className="space-y-3 mb-4">
            {ops!=0 && [
            Array.from({ length: Number(courses) }, (_, i) => (
              <div className="flex gap-2 items-center" key={i}>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Grade pt (0-10)"
                  className="w-1/2 px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-sm"
                  onChange={(event)=>{
                    gp[i]=Number(event.target.value);
                    setGp(gp);
                  }}
                />
                <input
                  type="number"
                  step="0.5"
                  placeholder="Credits"
                  className="w-1/3 px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-sm"
                  onChange={(event)=>{
                    creds[i]=Number(event.target.value);
                    setCreds(creds)
                  }}
                />
              </div>
            )),
            <button className="w-full py-2.5 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition" onClick={getSg} key={2}>
                Calculate SGPA
            </button> ]
            }
            </div>

            {calc && <div className="mt-6 bg-indigo-50 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-slate-500 text-sm font-medium">Expected SGPA</span>
              <span className="text-2xl font-bold text-indigo-600">{sg}</span>
            </div>}
          </div>
    </>
  )
}