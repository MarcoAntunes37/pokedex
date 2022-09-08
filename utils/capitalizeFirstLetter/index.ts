export default function capitalizeFirstLetter(value: string){
    const str = value.charAt(0).toUpperCase() + value.slice(1);
    return str
}