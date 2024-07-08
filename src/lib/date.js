export const formatMyDate = (input) => {
    let date = new Date(input);
    
    // Check if the date is valid
    if (isNaN(date)) {
      throw new Error("Invalid date");
    }
  
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return formattedDate;
  };
  