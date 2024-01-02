// Specify the URL you want to fetch data from
const apiUrl = 'https://thickhead.pythonanywhere.com/app_api/posts/all/';

// Make a GET request using the fetch function
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Handle the retrieved data
    console.log('Data:', data);
    for (const post in  data) {
       let  qoute=data[post]
       document.getElementById("posts").innerHTML+=` 
       <div class="col-lg-3 col-sm-12">
       <div class="card mx-2 my-2">
           <img src="${qoute.image}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title">Qoute #${post}</h5>
               <p class="card-text">${qoute.description.slice(0,100)}...</p>
               <p class="text-center"><a href="#" class="btn btn-primary">View</a></p>
           </div>
       </div>
   </div>`
    }
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
