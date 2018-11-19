$(document).ready(function() {
    $('.result').addClass("info").html('<div><button type="button" class="btn btn-outline-white">Zagraj</button></div>' );
    $('.btn').click(function() {
        setTimeout(function() {
            start_game();
        }, 500);
    });
    function start_game() {
        var table = ["20180912_190349.jpg", "20180912_190529.jpg", "20180912_190533.jpg" , "20180912_190906.jpg", "20180912_190912.jpg", "20180912_191044.jpg",
        "20180912_190349.jpg", "20180912_190529.jpg", "20180912_190533.jpg" , "20180912_190906.jpg", "20180912_190912.jpg", "20180912_191044.jpg"
        ];
        var element_number = 0;
        var prev_element_number = 0;
        var prev_click_row = 0;
        var prev_click_column = 0;
        var click_row = 0;
        var click_column = 0;
        var move = 0;
        var check = 0;
        var clicked = 0;

        $('.result').css("visibility", "hidden");
        for(var i=0; i<=4; i++) {
            $('td[data-column^="' + i + '"]').removeClass("check").removeClass("checked").addClass("hide").html("?");
        }
   
        function check_game(prev_click_row, prev_click_column, click_row, click_column, prev_element_number, element_number) {
            move = move + 1;
            if(table[prev_element_number] === table[element_number]) {
                setTimeout(function() { 
                    $('tr[data-row^="' + prev_click_row + '"] td[data-column^="' + prev_click_column + '"]').addClass("checked"); 
                    $('tr[data-row^="' + click_row + '"] td[data-column^="' + click_column + '"]').addClass("checked"); 
                    check = check + 1;
                    if(check === 6) {
                      
                       $('.result').prepend("Gra zakończona w <b>" + move + "</b> ruchach").css("visibility", "visible");
                    }
                }, 300);
            } else {
                setTimeout(function() { 
                    $('tr[data-row^="' + prev_click_row + '"] td[data-column^="' + prev_click_column + '"]').removeClass("check").addClass("hide").html("?"); 
                    $('tr[data-row^="' + click_row + '"] td[data-column^="' + click_column + '"]').removeClass("check").addClass("hide").html("?"); 
                }, 700);
            }
        }

        $('table td').click(function() {
            click_row = parseInt($(this).closest('tr').attr("data-row"));
            if(($(this).hasClass("check")) == false) {
                click_column = parseInt($(this).attr("data-column"));
                clicked = clicked + 1;
                element_number = click_column + click_row;
                $(this).removeClass("hide").html('<img src="https://slpw16.github.io/memory_game/images/' + table[element_number] + '">').addClass("check");
                if(clicked === 1) {
                    prev_click_row = click_row;
                    prev_click_column = click_column;
                    prev_element_number = element_number;
                }
                if(clicked === 2) {
                check_game(prev_click_row, prev_click_column, click_row, click_column, prev_element_number, element_number);
                clicked = 0;
                }
            }
        });
    }

});