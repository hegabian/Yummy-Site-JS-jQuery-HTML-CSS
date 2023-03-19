async function catMeals(){
    var meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        var responseMeals= await meals.json();
        var card = document.getElementById("show-cards")
        var cartonaa = "";
        for(i=0; i<responseMeals.meals.length ;i++){
            cartonaa += `
            <div class="col-md-3">
                <div class="card overflow-hidden bg-transparent">
                    <img src="${responseMeals.meals[i].strMealThumb}" class="card-img-top">
                    <div class="meal-layer position-absolute d-flex flex-column align-items-center text-black p-2">
                        <h3>${responseMeals.meals[i].strCategory}</h3>
                    </div>
                </div>
            </div>
           `
            
        }
        card.innerHTML= cartonaa     
    
    }   
    catMeals()

  function openSideNav() {
    $(".mySidenav").animate({
        left: 0
    }, 300)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 5; i++) {
        $(".choices li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeSideNav() {
    let boxWidth = $(".mySidenav .nav-tab").outerWidth()
    $(".mySidenav").animate({
        left: -boxWidth
    }, 300)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".choices li").animate({
        top: 300
    }, 300)
}

closeSideNav()
$("#iccon").click(() => {
})
function closeOpen(){
  if ($(".mySidenav").css("left") == "0px") {
    closeSideNav()
} else {
    openSideNav()
}
}

