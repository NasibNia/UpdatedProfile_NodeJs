var path = "assets/images/";

$(document).ready(function () {

    console.log(" before   ");
    $(document).on('click', '#portfolio', function(){
        makeCards();
    });

    $(document).on('click', '#newProj', function(){
        window.location.href = "/newProject";
    });

    
 
    $(document).on('submit','#newProj-form' ,function(event){

        event.preventDefault();
        console.log(" inside    ");
        
        // var techArr = $('tech-id').split(",");

        var newProject = {
            name : $('#name-id').val().trim(),
            tech : $('#tech-id').val().trim(),
            description : $("#description-id").val().trim(),
            img : path + $("#imgName-id").val().trim(),
            webUrl : $('#webUrl-id').val().trim(),
            gitHub : $('#gitHub-id').val().trim()
        };

        console.log(" new Project is    " ,newProject);

        // make an ajax call to the server to post the shout
        $.ajax({
            method : "POST",
            url     : "/api/projects",
            data    : newProject
        }).then(function(result){
            // console.log(result);
            console.log("posted");
            location.reload();
        });
        });
    });


function makeCards(){
    $.get("/portfolio", function(data){
        console.log("inside js   ",data);
        window.location.href = "/portfolio";
    });
}