
async function catMeals(){
    var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        var responseMeals= await meals.json();
        var card = document.getElementById("show-cards")
        var cartonaa = "";
        for(i=0; i<responseMeals.meals.length ;i++){
            cartonaa += `
            <div class="col-md-3">
                <div onclick="areaOfMeal('${responseMeals.meals[i].strArea}')" class=" card card_ingre px-3 text-white text-center overflow-hidden bg-transparent" style="width: 18rem;">
                    <i class="fa-solid mb-2 fa-house-laptop card-img-top" style="font-size: 5rem;" ></i>  
                    <h3 class="mb-4">${responseMeals.meals[i].strArea}</h3>   
                </div>
            </div>
           `
            
        }
        card.innerHTML= cartonaa     
    
    }   

    function getFirst50Words(description) {
        if (description == null){
            return description;
        }
        const words = description.split(' ');
        const first50Words = words.slice(0, 25);
        const result = first50Words.join(' ');
        return result;
      }

    

    

    async function areaOfMeal(x){
        console.log(x);
        var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`);
    
            var responseMeals= await meals.json();
            var card = document.getElementById("show-cards")
            var cartonaa = "";
            for(i=0; i<responseMeals.meals.length ;i++){
                cartonaa += `
                <div class="col-md-4">
                    <div onclick="idMeals('${responseMeals.meals[i].idMeal}')" class="card overflow-hidden bg-transparent" style="width: 18rem;">
                        <img src="${responseMeals.meals[i].strMealThumb}" class="card-img-top">
                        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${responseMeals.meals[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
               `
                
            }
            card.innerHTML= cartonaa     
        
        }   


        async function idMeals(id){
            var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                var responseMeals= await meals.json();
                var card = document.getElementById("show-cards")
                var cartonaaa = "";
                console.log(responseMeals.meals.strMeal);
                for(i=0; i<responseMeals.meals.length ;i++){
                    cartonaaa += `<div class="col-md-4 text-white">
                    <img class="w-100 rounded-3" src="${responseMeals.meals[i].strMealThumb}"
                        alt="">
                        <h2>${responseMeals.meals[i].strMeal}</h2>
                </div>
                <div class="col-md-8 text-white">
                    <h2>Instructions</h2>
                    <p>${responseMeals.meals[i].strInstructions}</p>
                    <h3><span class="fw-bolder">Area : </span>${responseMeals.meals[i].strArea}</h3>
                    <h3><span class="fw-bolder">Category : </span>${responseMeals.meals[i].strCategory}</h3>
                    <h3>Recipes :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="bg-primary rounded rounded-2 px-2 py-1 me-2">${responseMeals.meals[i].strIngredient1}</li>
                        <li class="bg-primary rounded rounded-2 px-2 py-1 me-2">${responseMeals.meals[i].strIngredient2}</li>
                        <li class="bg-primary rounded rounded-2 px-2 py-1 me-2">${responseMeals.meals[i].strIngredient3}</li>
                        <li class="bg-primary rounded rounded-2 px-2 py-1 me-2">${responseMeals.meals[i].strIngredient4}</li>
                        <li class="bg-primary rounded rounded-2 px-2 py-1 me-2">${responseMeals.meals[i].strIngredient5}</li>
                    </ul>
        
                    <h3>Tags :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        
                    </ul>
        
                    <a target="_blank" href="${responseMeals.meals[i].strSource}" class="btn btn-success">Source</a>
                    <a target="_blank" href="${responseMeals.meals[i].strYoutube}" class="btn btn-danger">Youtube</a>
                </div>
                   `
                    
                }
                card.innerHTML= cartonaaa     
            
            }   






        catMeals()
    
