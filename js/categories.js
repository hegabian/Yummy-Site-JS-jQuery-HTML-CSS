
async function catMeals(){
    var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        var responseMeals= await meals.json();
        var card = document.getElementById("show-cards")
        var cartonaa = "";
        for(i=0; i<responseMeals.categories.length ;i++){
            cartonaa += `
            <div class="col-md-4">
                <div onclick="catOfMeal('${responseMeals.categories[i].strCategory}')" class="card overflow-hidden bg-transparent" style="width: 18rem;">
                    <img src="${responseMeals.categories[i].strCategoryThumb}" class="card-img-top">
                    <div class="meal-layer position-absolute d-flex flex-column align-items-center text-black p-2">
                        <h3>${responseMeals.categories[i].strCategory}</h3>
                        <p class="overflow-hidden px-2">${responseMeals.categories[i].strCategoryDescription.slice(0, 130)+'...'}</p>
                    </div>
                </div>
            </div>
           `
            
        }
        card.innerHTML= cartonaa     
    
    }   
    

    

    async function catOfMeal(z){
        console.log(z);
        var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`);
            var responseMeals= await meals.json();
            var card = document.getElementById("show-cards")
            var cartonaa = "";
            console.log(responseMeals);
            for(i=0; i<responseMeals.meals.length ;i++){
                
                cartonaa += `
                <div class="col-md-4">
                    <div class="card overflow-hidden bg-transparent" style="width: 18rem;">
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
        catMeals()
    