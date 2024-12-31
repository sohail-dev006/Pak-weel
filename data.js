let cars = [
    {
        image: "image/tn_mercedes-benz.webp",
        name: "Mercedes Benz Class 2007 C200 for Sale",
        price: 50.3 ,
        city: "Lahore",
        province: "Punjab",
        city_area: "DHA Defence",
        model: 2024,
        distance: 20002,
        engine: "Petrol",
        power:1800,
        type: "Automatic",
    },
    {
        image: "image/tn.webp",
        name: "Mercedes Benz Class 2007 C200 for Sale",
        price: 30.3 ,
        city: "Lahore",
        province: "Punjab",
        city_area:"Johar Town",
        model: 2024,
        distance: 10000,
        engine: "Diesel",
        power:1800,
        type: "Automatic",
    },
    {
        image: "image/tn_bmw-7-series-760l.webp",
        name: "BMW Benz Class 2021 xDrive40 for Sale",
        price: 14.45,
        city: "Islamabad",
        province: "Punjab",
        city_area: "Raja Bazar",
        model: 2018,
        distance: 60230,
        engine: "Petrol",
        power:1500,
        type: "Manual",
    },
    {
        image: "image/tn_toyota-corolla-altis-1-8-grande-automatic-2016-107917996.webp",
        name: "Toyota Fortuner Benz C 2020 2.7 for Sale",
        price: 13.7,
        city:"Lahore",
        province: "Punjab",
        city_area: "Gulberg",
        model: 2022,
        distance: 14500,
        engine: "Petrol",
        power:2700,
        type: "Automatic",
    },
    {
        image: "image/toyota-prius-Elll.webp",
        name: "Toyota Fortuner Benz C 2020 2.7 for Sale",
        price: 12.7,
        city:"Lahore",
        province: "Punjab",
        city_area: "Gulberg",
        model: 2022,
        distance: 14500,
        engine: "Electric",
        power:2700,
        type: "Automatic",
    },
    {
        image: "image/tn_toyota-fortuner-legender-2022-107871420.webp",
        name: "Toyota Fortuner Benz Class 2021 2.7 Sale",
        price: 9.7,
        city: "Islamabad",
        province: "Punjab",
        city_area: "F9 Sector",
        model: 2022,
        distance: 4500.9,
        engine: "Diesel",
        power:2700,
        type: "Automatic",
    },
    {
        image: "image/bmw-ix3.webp",
        name: "Mercede Benz Class 2021 xDrive40 for Sale",
        price: 10.45,
        city: "Islamabad",
        province: "Punjab",
        city_area: "Raja Bazar",
        model: 2008,
        distance: 6030,
        engine: "Diesel",
        power:1700,
        type: "Automatic",
    },
    {
        image:"image/toyota-hilux1000.webp",
        name:"Toyota Hilux 2020 Revo V Automatic 2.8 for Sale",
        price: 100,
        city: "Islamabad",
        province: "Punjab",
        city_area:"F9 Sector",
        model: 2020,
        distance: 10000.0,
        engine: "Diesel",
        power:2800,
        type: "Automatic",
    },
    {
        image:"image/tn_honda-city-1-5l-aspire-cvt-2022-107418904.webp",
        name:"Honda Hilux 2020 Revo V Automatic 2.8 for Sale",
        price: 100,
        city: "Swat",
        province: "KPK",
        city_area:"Mingora",
        model: 2021,
        distance: 10000.0,
        engine: "Petrol",
        power:2800,
        type: "Automatic",
    },
    {
        image:"image/toyota-passo-moda-g.webp",
        name:"Toyota Passo 2021 Moda G for Sale",
        price: 100,
        city: "Swat",
        province: "KPK",
        city_area:"Mingora",
        model: 2021,
        distance: 7000.0,
        engine: "Petrol",
        power:1000,
        type: "Automatic",
    },
    {
        image: "image/tn_suzuki-fx-ga-3-1986-107290796.webp",
        name: "Suzuki FX 1988 GA For sale",
        price: 1.5,
        city: "Lahore",
        province: "Punjab",
        city_area: "Cantt",
        model: 1988,
        distance: 12500.00,
        engine: "Diesel",
        power:1000,
        type: "Manual",
    },
    {
        image: "image/suzuki-mehran-vxr-euro.webp",
        name: "Suzuki Mehran 2008 VX for Sale",
        price: 5.5,
        city: "Lahore",
        province: "Punjab",
        city_area: "Cantt",
        model: 2008,
        distance: 12500.00,
        engine: "Petrol",
        power:1000,
        type: "Manual",
    },
    {
        image: "image/tn_honda-city-1-5l-aspire-cvt-2022-107418904.webp",
        name: "Honda City 2022 1.5L ASPIRE CVT for Sale",
        price: 60.20,
        city: "Lahore",
        province: "Punjab",
        city_area:"Bahria Town",
        model: 2010,
        distance: 4000.0,
        engine: "Petrol",
        power:1300,
        type: "Manual",
    },
    {
        image: "image/tn_honda-city-1-5l-aspire-cvt-2022-107418904.webp",
        name: "Honda City 2022 1.5L ASPIRE CVT for Sale",
        price: 47.20,
        city: "Quetta",
        province: "Bolochistan",
        city_area:"Main Bazr",
        model: 2015,
        distance: 4000.0,
        engine: "Petrol",
        power:1300,
        type: "Automatic",
    },
    {
        image:"image/tn_toyota-c-hr-g-61-2024-107839381.webp",
        name:"Toyota C-HR G 2024 for Sale 4",
        price: 82,
        city: "Karachi",
        city_area:"Korangi",
        province: "Sindh",
        model: 2024,
        distance: 8800.0,
        engine: "Hybrid",
        power:1800,
        type: "Automatic",
    },
    {
        image:"image/tn.webp",
        name:"Toyota Hilux 2019 Revo V Automatic 2.8 for Sale",
        price: 95,
        city: "Karachi",
        city_area:"Malir",
        province: "Sindh",
        model: 2019,
        distance: 9100.0,
        engine: "Diesel",
        power:2800,
        type: "Automatic",
    },
];  
displayCar(cars);



