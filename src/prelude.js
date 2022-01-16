export const choosing = (a,b) => c => c ? a : b

export const firstOr = (a,b) => (_) => a ? a : b

export const title = s => { let previous = document.title; document.title = s; return previous }

export const capitalize = s => s[0].toUpperCase() + s.slice(1);

export const capitalizeAll = (s,sep=" ") => s.split(sep)
    .map(capitalize)
    .join(sep);

export const lowerCaseMatch = (a,b) => a.toLowerCase().includes(b.toLowerCase())
