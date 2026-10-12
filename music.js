export const sharp=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
export const flat=['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
export function pitch(note){const m=/^([A-G])([#b]?)$/.exec(note);return m?({C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]]+(m[2]==='#'?1:m[2]==='b'?-1:0)+12)%12:-1;}
export const chordPattern=/^(?:[A-G][#b]?(?:m|maj|min|dim|aug|sus|add)?\d*(?:\/[A-G][#b]?)?|N\.C\.)$/;
export function isChordLine(line){const tokens=line.trim().split(/\s+/);return tokens.length>0 && tokens.some(t=>chordPattern.test(t)) && tokens.every(t=>chordPattern.test(t)||/^x\d+$/.test(t));}
export function transpose(chord,steps,useFlats=false){if(steps===0||chord==='N.C.')return chord;return chord.replace(/[A-G][#b]?/g,n=>(useFlats?flat:sharp)[(pitch(n)+steps%12+12)%12]);}
