export const capitalize = s => s[0].toUpperCase() + s.slice(1);

export const capitalizeAll = (s,sep=" ") => s.split(sep)
    .map(capitalize)
    .join(sep);
