export const datetime = (date:Date) =>{
    const dateObject = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(dateObject);
    return formattedDate
  }