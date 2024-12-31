let imageUrl = "";

const carImage = document.querySelector('input[type="file"]'); 

carImage.addEventListener("change", () => {
    const file = carImage.files[0]; // The first file will be stored here when the user selects the file
    // console.log(file);
    if (file) {
        const reader = new FileReader(); // File Reader is an API that reads the uploaded file URL
        console.log(reader);
        reader.onload = function (e) {
          console.log('e ',e);
          
            // File read hony k bad ye function chalyy....
            imageUrl = e.target.result; // e.target.result contains the data URL of the image
        };
    reader.readAsDataURL(file);
}

});


function submitBtn(id) {
    const carInfo = document.getElementById("car-Info").value;
    const provinceCity = document.getElementById("province-City").value;
    const cityArea = document.getElementById("cityArea").value;
    const carCity = document.getElementById("car-City").value;
    const carModel = document.getElementById("car-Model").value;
    const carPrice = document.getElementById("car-Price").value;
    const carKm = document.getElementById("car-Km").value;
    const carEngine = document.getElementById("car-Engine").value;
    const carPower = document.getElementById("car-Power").value
    const carType = document.getElementById("car-type").value;    

    
    if( carInfo != ""){
        //  && carCity != "" && cityArea != ""  && carModel != "" && carPrice != "" && carKm != "" && carType != ""
      cars.push({
        image: imageUrl,
        name: carInfo,
        province:provinceCity,
        city: carCity,
        city_area:cityArea,
        model: carModel,
        price: carPrice,
        distance: carKm,
        engine:carEngine,
        power:carPower,
        type: carType,
      });
    }else{
        alert("Please fill all required fields");
    }
    displayCar(cars);
   
    
  }

  function displayCar(cars) {
    let listCard = document.getElementById("list-card");
     listCard.innerHTML = "";

    cars.forEach((car, index) => {
        const dataDiv = document.createElement("div");
        let cardContent = "";
        cardContent = dataDiv;
        cardContent = `
               <div class="row  p-2 my-3 bg-white mx-1 rounded-1">
                  <div class="col-3 p-0 ">
                      <img class="img-fluid" src="${car.image}" alt="">
                  </div>
                <div class="col-9">
                     <div class="d-flex ps-2 justify-content-between pt-3">
                          <h5 class=" text-black">${car.name}</h5>
                          <p class="ms-5 ps-5 fw-medium text-black">PKR ${car.price} Lacs</p>
                     </div>
                        <div class=" ps-2 text-black">
                          ${car.city}
                        </div>
                      <div class="d-flex ps-2 pt-2">
                          <p class="me-2 text-black" >${car.model}</p>
                          <p class="mx-2 text-black">${car.distance} km</p>
                          <p class="mx-2 text-black" >${car.engine}</p>
                          <p class="mx-2 text-black" >${car.power}cc</p>
                          <p class="mx-2 text-black" >${car.type}</p>
                      </div>
                      <div class="d-flex justify-content-between">
                       <div>
                        <p class='text-black ps-2'> Updated Just Now</p> 
                      </div>
                      <div>     
                        <button class="text-black fs-6 px-2 border-0 rounded-1 bg-white" onclick="editBtn(${index})" id="${index}"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="text-black border-0 fs-6 rounded-1 bg-white" onclick="deleteBtn(${index})" id="${index}"><i class="fa-solid fa-trash-can"></i></button>
                      </div>
                     </div>
                   </div>
                 </div>
              </div>`;
          listCard.innerHTML += cardContent;
          //  <div> 
          //   <span><i class="fa-regular me-3 fa-heart"></i></span>
          //   <button class="text-white rounded-1 bg-3EB549 border-0 fs-6 px-2 py-1 "     data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid mx-1 fa-phone"></i>Show Phone No.</button>
          //   </div>
    });
         document.getElementById("car-Info").value = null;
         document.getElementById("province-City").value = null;
         document.getElementById("car-City").value = null;
         document.getElementById("cityArea").value = null;
         document.getElementById("car-Model").value = null;
         document.getElementById("car-Price").value = null;
         document.getElementById("car-Km").value = null;
         document.getElementById("car-Engine").value = null;
         document.getElementById("car-Power").value = null;
         document.getElementById("car-type").value = null;
         document.querySelector('input[type="file"]').value = "";

  }
  function showAdd(){
    document.getElementById("submitbtn").style.display = "block";
    document.getElementById("updatebtn").style.display = "none";
  }


  function editBtn(id){
    console.log(id);
       //  document.querySelector('input[type="file"]').value = cars[id].image;
       //  document.getElementById("car-Image").value = cars[id].image;
           document.getElementById("car-Info").value = cars[id].name;
           document.getElementById("car-City").value = cars[id].city;
           document.getElementById("province-City").value = cars[id].province;
           document.getElementById("cityArea").value = cars[id].city_area;
           document.getElementById("car-Model").value = cars[id].model;
           document.getElementById("car-Price").value = cars[id].price; 
           document.getElementById("car-Km").value = cars[id].carKm;
           document.getElementById("car-Engine").value = cars[id].engine;
           document.getElementById("car-Power").value = cars[id].power;
           document.getElementById("car-type").value = cars[id].type;


          document.getElementById("hiddenId").value = id;
          document.getElementById("submitbtn").style.display = "none";
          document.getElementById("updatebtn").style.display = "block";

  }

  function updateBtn(){
    const id = document.getElementById("hiddenId").value;
    // cars[id].image = document.querySelector('input[type="file"]').value;
    cars[id].name = document.getElementById("car-Info").value;
    cars[id].province = document.getElementById("province-City").value;
    cars[id].city = document.getElementById("car-City").value;
    cars[id].city_area = document.getElementById("cityArea").value;
    cars[id].model = document.getElementById("car-Model").value;
    cars[id].price = document.getElementById("car-Price").value; 
    cars[id].carKm = document.getElementById("car-Km").value;
    cars[id].engine = document.getElementById("car-Engine").value;
    cars[id].power = document.getElementById("car-Power").value;
    cars[id].type =  document.getElementById("car-type").value;


    displayCar(cars);
  }

  function deleteBtn(id){
    cars = cars.filter((car) => car.id != id );
    cars.splice(id, 1);
    displayCar(cars);
  }


    const mileageFrom = document.getElementById("mileageFrom");
    const mileageTo = document.getElementById("mileageTo");
  
    const calculateMileageRange = () => {
    const from = parseInt(mileageFrom.value) || 0;  
    const to = parseInt(mileageTo.value);
    const filterData = cars.filter((car) => car.distance >= from && car.distance <= to);
  
  //   console.log("aklj");
    displayCar(filterData);

   document.getElementById("mileageFrom").value = "";
   document.getElementById("mileageTo").value = "";
  };

  mileageFrom.addEventListener("input",);
  mileageTo.addEventListener("input",);
   

 