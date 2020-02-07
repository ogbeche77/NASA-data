// data retrieved on 06.02.2020 from https://data.giss.nasa.gov/gistemp/
// working with API locally (file saved on localhost)

async function getData() { //named async bcos its an asynchronous function making asynchronous calls
    const response = await fetch("nasaData.csv");
    const data = await response.text();  //we decide to receive data as text. it could also be json,blob,arraybuffer,redirect etc
    console.log(data);
   
   //parse the csv; meaning breaking up the data and arranging it objects etc
    //we use the split function here to put the element in an array
   
    //we can split the table with line break since each row is demacated by a line break
    const table = data.split("\n");
    //row refers to the rows in the table and 
    //first 3 rows are splited in column
    table.forEach(row =>{
        const columns =row.split(",");
        const year =columns[0];
        const temp =columns[1];
        const tempN = columns[2];
        console.log(year, temp, tempN);
    });
}

getData();

