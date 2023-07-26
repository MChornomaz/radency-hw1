export const formatDate = (date) => {
  if(date){
    const dateParts = date.split('-');
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    return formattedDate
  }
  
}