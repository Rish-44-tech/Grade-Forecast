import {useState} from "react";

export default function Cg(){
    const [currCg,setCurrCg]=useState<string>("");
    const [currCreds,setCurrCreds]=useState<string>("");
    const [expSg,setExpSg]=useState<string>("");
    const [creds,setCreds]=useState<string>("");
    const [cg,setCg]=useState<string>("");

    function getCg(){
        const cg=(Number(currCg)*Number(currCreds)+Number(expSg)*Number(creds))/(Number(currCreds)+Number(creds));
        setCg(String(cg));
    }
    return (
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl shadow-teal-100 border border-white p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-teal-600 mb-1">
              Expected CGPA
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-5">
              Based on your current standing + this semester
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-500 mb-1 block">
                  Current CGPA
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 8.20"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
                  onChange={(event)=>{
                    setCurrCg(event.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500 mb-1 block">
                  Current Total Credits
                </label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="e.g. 90"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
                  onChange={(event)=>{
                    setCurrCreds(event.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500 mb-1 block">
                  Expected SGPA This Sem
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 9.00"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
                  onChange={(event)=>{
                    setExpSg(event.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500 mb-1 block">
                  Credits This Sem
                </label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="e.g. 20"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
                  onChange={(event)=>{
                    setCreds(event.target.value);
                  }}
                />
              </div>
            </div>

            <button className="w-full mt-5 py-2.5 rounded-xl bg-teal-500 text-white font-medium hover:bg-teal-600 transition" onClick={getCg}>
              Calculate CGPA
            </button>

            {cg!="" && <div className="mt-5 bg-teal-50 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-slate-500 text-sm font-medium">Expected CGPA</span>
              <span className="text-2xl font-bold text-teal-600">{cg}</span>
            </div>}
          </div>
    )
}