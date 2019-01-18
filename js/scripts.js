$(document).ready(function() {

    $("#formOne").submit(function(event) {
        var name = $("input#name").val();

        $(".name").text(name);
        $("#landing").hide();
        $("#survey").fadeIn();

        event.preventDefault();
    });

    $("#formTwo").submit(function(event) {
        var experience = parseInt($("select#experience").val());
        var language = parseInt($("select#language").val());
        var stack = parseInt($("select#stack").val());
        var industry = parseInt($("select#industry").val());
        var company = parseInt($("select#company").val());
        var size = parseInt($("select#size").val());

        event.preventDefault();
     
        if (experience === 1 && 
            stack   === 3 || 
            company === 3 || 
            language === 2) {
            
            $(".well").show();
            $("#cSharpResult").fadeIn();
            $("#javaResult").hide();
            $("#phpResult").hide();
            $("#rubyResult").hide();
            $("#cssResult").hide();
            $("#survey").hide();
            $("#landing").hide();
        
        } else if (experience === 3 && 
            stack === 2 && 
            industry === 2 || 
            language === 5) {
                
            $(".well").show();
            $("#cSharpResult").hide();
            $("#javaResult").hide();
            $("#phpResult").fadeIn();
            $("#rubyResult").hide();
            $("#cssResult").hide();
            $("#survey").hide();
            $("#landing").hide();

        } else if ((experience === 2 &&
            (company === 1 || 4) && 
            stack === 1 &&
            size === 1) || language === 3) { 

            $(".well").show();
            $("#cSharpResult").hide();
            $("#javaResult").hide();
            $("#phpResult").hide();
            $("#rubyResult").fadeIn();
            $("#cssResult").hide();
            $("#survey").hide();
            $("#landing").hide();

        } else if (language === 4 || 
            ((experience === 4 || 1)  && 
            (company === 1 || 4) && 
            stack === 1)) { 
            
            $(".well").show();
            $("#cSharpResult").hide();
            $("#javaResult").hide();
            $("#phpResult").hide();
            $("#rubyResult").hide();
            $("#cssResult").fadeIn();
            $("#survey").hide();
            $("#landing").hide();

        } else { 

            $(".well").show();
            $("#cSharpResult").hide();
            $("#javaResult").fadeIn();
            $("#phpResult").hide();
            $("#rubyResult").hide();
            $("#cssResult").hide();
            $("#survey").hide();
            $("#landing").hide();
        
        }
    });
});
