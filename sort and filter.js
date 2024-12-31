displayCar(cars);
document.getElementById("sort-Id").addEventListener("change", function () {
    
    const sortedCars = sortCar(this.value);
    console.log(sortedCars);
    displayCar(sortedCars);
  });


  function sortCar(sortOption) {
    let newCar =  cars.sort((a,b) => {          
      switch (sortOption) {
        case "name-asd":
            return b.name.localeCompare(a.name);
        case "name-des":
            return a.name.localeCompare(b.name);
        case "price-high":
            return b.price - a.price;
        case "price-low":
            return (a.price - b.price);
        case "model-latest":
            return b.model - a.model;
        case "model-oldest":
          return (a.model - b.model);

      }
    });
    return newCar;
  }
 


let input = document.getElementById("searchId");
input.addEventListener("input", ()=>{

  filterCars()
});

document.querySelectorAll('.province-checkbox').forEach(element => {
  element.addEventListener('change', filterCars)

});

document.querySelectorAll('.city-checkbox').forEach(element => {
  element.addEventListener('change', filterCars)

});

document.querySelectorAll('.area-checkbox').forEach(element => {
  element.addEventListener('change', filterCars); 
});


document.querySelectorAll('.car-type').forEach(element => {
  element.addEventListener('change', filterCars); 
});


document.querySelectorAll('.engine-type').forEach(element => {
  element.addEventListener('change', filterCars); 
});
 


function filterCars() {
  let searchQuery = document.getElementById('searchId');

  let province1 = document.getElementsByName('province');
  let provinceCheck = [];
  province1.forEach(element => {
    if (element.checked) {
      provinceCheck.push(element.value.toLowerCase());
    }
    
  });



  let citiesCheckbox = document.getElementsByName('city');
  let checkedCities = [];
  citiesCheckbox.forEach(element => {
    if (element.checked) {
      checkedCities.push(element.value.toLowerCase());
    }
    
  });

  let areasCheckbox = document.getElementsByName('city_area');
  let checkedCityAreas = [];
  areasCheckbox.forEach(element => {
    if (element.checked) {
      checkedCityAreas.push(element.value.toLowerCase());
    }
    
  });

  
  let carType = document.getElementsByName('type');
  let typeOfCar = [];
  carType.forEach(element => {
    if (element.checked) {
      typeOfCar.push(element.value.toLowerCase());
    }
    
  });

  let engineType = document.getElementsByName('engineType');
  let engineTypeOfcar = [];
  engineType.forEach(element => {
    if (element.checked) {
      engineTypeOfcar.push(element.value.toLowerCase());
    }
    
  });
  


let filteredCars = cars.filter((car)=>{
    return ((car.name.toLowerCase().includes(searchQuery.value.toLowerCase()))  || 
      car.city.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
      car.model == searchQuery.value.toLowerCase()) &&
      (checkedCities.includes(car.city.toLowerCase()) || checkedCities.length == 0) &&
      (checkedCityAreas.includes(car.city_area.toLowerCase()) || checkedCityAreas.length == 0) &&
      (typeOfCar.includes(car.type.toLowerCase()) || typeOfCar.length == 0)  &&
      (engineTypeOfcar.includes(car.engine.toLowerCase()) || engineTypeOfcar.length == 0) &&
      (provinceCheck.includes(car.province.toLowerCase()) || provinceCheck.length == 0);

      
     
    });
    displayCar(filteredCars);  
}

const priceFrom = document.getElementById("priceFrom");
  const priceTo = document.getElementById("priceTo");
  
    const calculatePriceRange = ()=> {
    const from = parseInt(priceFrom.value,) || 0;
    const to = parseInt(priceTo.value);
    
    const filterData = cars.filter((car) => car.price >= from && car.price <= to ) || (from.length == 0);

    
      displayCar(filterData);
       priceFrom = document.getElementById("priceFrom").value = "";
       priceTo = document.getElementById("priceTo").value = "";

    };


    priceFrom.addEventListener("input",);
    priceTo.addEventListener("input",);





  

  