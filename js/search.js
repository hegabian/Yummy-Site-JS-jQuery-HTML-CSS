
async function searchByName(searchMealName){
var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealName}`);
    var responseMeals= await meals.json();
    var card = document.getElementById("show-cards")

    var cartona = "";
    for(i=0; i<20 ;i++){
        console.log(responseMeals)
        cartona += `
        <div class="col-md-4">
            <div class="card overflow-hidden" style="width: 18rem;">
                <img src="${responseMeals.meals[i].strMealThumb}" class="card-img-top">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${responseMeals.meals[i].strCategory}</h3>
                </div>
            </div>
        </div>
       `
        
    }
    card.innerHTML= cartona     

}   

async function searchByOneLetter(searchMealLetter){
    var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchMealLetter}`);
        var responseMeals= await meals.json();
        var card = document.getElementById("show-cards")
    
        var cartona = "";
        for(i=0; i<20 ;i++){
            console.log(responseMeals)
            cartona += `
            <div class="col-md-4">
                <div class="card overflow-hidden" style="width: 18rem;">
                    <img src="${responseMeals.meals[i].strMealThumb}" class="card-img-top">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${responseMeals.meals[i].strCategory}</h3>
                    </div>
                </div>
            </div>
           `
            
        }
        card.innerHTML= cartona     
    
    }   



