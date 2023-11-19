export const format = (value: string) => {

    const decimalSeparator = (1.1).toLocaleString().at(1) as string;

    if(value.includes(".") && !(value.includes("e") || value.includes("E"))) return Number(value.slice(0, value.indexOf("."))).toLocaleString()+decimalSeparator+value.slice(value.indexOf(".")+1);
    else return Number(value).toLocaleString(undefined, { maximumFractionDigits: 15 });

};