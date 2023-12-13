// let arr = ["Shahid", "Taimoor", "Imran", "Iftikhar"]
// console.log(arr.length)


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     document.getElementById("name").innerHTML += `<li>${element}</li>`
// }

async function fetchData() {
    try {
        const response = await fetch('https://thickhead.pythonanywhere.com/app_api/posts/all/');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            document.getElementById("content").innerHTML += `
           <div class="col-lg-4">
           <div class="card" >
           <img src="${element.image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
       </div>
           </div>
      `

        }

        // Further processing with the data can be done here

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the async function
fetchData();