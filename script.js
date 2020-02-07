// data retrieved on 06.02.2020 from https://data.giss.nasa.gov/gistemp/
// working with API locally (file saved on localhost)

async function getData() { //named async bcos its an asynchronous function making asynchronous calls
    const response = await fetch("nasaData.csv");
    const data = await response.text();  //we decide to receive data as text. it could also be json,blob,arraybuffer,redirect etc
    console.log(data);
   
   //parse the csv; meaning breaking up the data and arranging it objects etc
    //we use the split function here to put the element in an array
   
    //we can split by line break since each row is demacated by a line break
    const rows = data.split("\n");
    console.log(rows);



   
    

}

getData();

