var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="eb9e0a21-b911-430e-9591-57d10d52a9e2";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var num_carrusel=0;
var tenis_data={"x":0,"ace":0};
var jugadores_num={"Ozil":0,"Guardado":0,"Xabi":0,"Rakitic":0,"Layun":0,"Bale":0,"Muller":0,"Benzema":0,"Suarez":0};
var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_goles=false;
var input_radio=false;

var jugadores_nombres={"Ozil":"Ozil","Guardado":"Guardado","Xabi":"Xabi Alonso","Rakitic":"Rakitic","Layun":"Miguel Layún","Bale":"Bale","Muller":"Muller","Benzema":"Benzema","Suarez":"Suárez"};
var jugadores_descripcion={"Ozil":"Eres un digno dominador del juego. Tímido y callado, pero no te impide demostrar talento. Tú calidad nunca estará en duda. Sabes dominar un chicle con los pies.","Guardado":"Posees un toque privilegiado. Asistes y anotas cuando las circunstancias lo requieren. Eres atrevido, te gusta tener el control.","Xabi":"Eres líder y solidario, te gusta repartir el juego. Garra, pasión y elegancia definen tu personalidad dentro y fuera del campo.","Rakitic":"Eres la brújula de tu equipo. Posees una visión total de las circunstancias y sabes resolverlas. Tu trabajo defensivo no merma tu olfato goleador. Nadie te detiene.","Layun":"Miguel Layún","Bale":"Eres incontrolable dentro y fuera de las canchas. Actúas sin pensar, lo que más importa es aprovechar el momento, ser impredecible.","Muller":"Te gusta ser el centro de atención. Nadie te dice qué hacer, te gusta dominar al rival. Nunca te rindes, eres un ganador por naturaleza.","Benzema":"Eres incontrolable e inconfundible. Extrovertido, clase y lujo se nota en tus movimientos y pases. Tu debilidad, los autos y las mujeres.","Suarez":"Eres un killer. Los enemigos padecen tu olfato goleador y tus mordidas. Personalidad de fuego. No importan las formas, siempre buscas vencer a tu rival."};

$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$(document).on("click","#indepth_return",function(){
	$(" input:radio").attr("checked", false);	
	$("#indepth_resultados").removeClass();
	tenis_data={"x":0,"ace":0};
	jugadores_num={"Ozil":0,"Guardado":0,"Xabi":0,"Rakitic":0,"Layun":0,"Bale":0,"Muller":0,"Benzema":0,"Suarez":0};
	input_text=false;
	input_goles=false;
	input_radio=false;
	console.log("---");
	console.log(jugadores_num);
	
	$('#indepth_container').fullpage({
		anchors: ['cover','pregunta1','pregunta2','pregunta3','Adidas','pregunta4','pregunta5','pregunta6','pregunta7'],
	    scrollOverflow: true,
	    scrollbar: true,
	    slideSelector: '.section',
	    slidesNavigation: false,
	    controlArrows: false,
	    scrollingSpeed: 1000,
	    afterLoad: function(anchorLink, index){
            
        }
    });

	$(this).hide();
	$("input:text").val('');	
	disable=true;
	$(".indepth_boton").addClass("disable");
	$("#indepth_resultados").css("position","initial");
});

$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$(document).on("change","input:radio",function(){
	if($(".indepth_tenis input[name=pregunta1]").is(":checked") && $(".indepth_tenis input[name=pregunta2]").is(":checked") && $(".indepth_tenis input[name=pregunta3]").is(":checked")  && $(" input[name=pregunta4]").is(":checked")  && $(" input[name=pregunta5]").is(":checked")  && $(" input[name=pregunta6]").is(":checked")){
		input_radio=true;
	}else{
		input_radio=false;
	}
	indepth_comprobar();
});

$('.idepth_goleador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log("text:" +input_text);
	console.log("radio:" +input_radio);
	console.log("goles:" +input_goles);
	console.log("-----");
	if(input_text && input_radio && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
}



$(".indepth_tenis input[type=radio]").on("change",function(){
	if($(".indepth_tenis input[name=pregunta1]").is(":checked") && $(".indepth_tenis input[name=pregunta2]").is(":checked") && $(".indepth_tenis input[name=pregunta3]").is(":checked")){
		
		tenis_data={"x":0,"ace":0};
		
		tenis_data[$("input[name=pregunta1]:checked").val()]=parseInt(tenis_data[$("input[name=pregunta1]:checked").val()])+1;
		tenis_data[$("input[name=pregunta2]:checked").val()]=parseInt(tenis_data[$("input[name=pregunta2]:checked").val()])+1;
		tenis_data[$("input[name=pregunta3]:checked").val()]=parseInt(tenis_data[$("input[name=pregunta3]:checked").val()])+1;		
		
		
			if(tenis_data["ace"]>tenis_data["x"]){
				if(!active_ace){
					$(".indepth_jugadores input:radio").attr("checked", false);
				}
				$(".adidas_ace").css("display","block");
					$(".adidas_x").css("display","none");
					$("#indepth_resultados").addClass("m_ace");
					$("#tenis_name").html("Ace");
					active_ace=true;
				
					
				
			}else{
				
				if(active_ace){
						$(".indepth_jugadores input:radio").attr("checked", false);		
				}
				$(".adidas_x").css("display","block");
					$(".adidas_ace").css("display","none");
					$("#indepth_resultados").addClass("m_x");
					$("#tenis_name").html("X");
					active_ace=false;
			}
		
		
		
		$(".indepth_aviso").hide();
	}
	
	

});



$("input").on("change",function(){


	

	
});

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


function bgadj(){
         
          $("#video").css( "width"," auto");
          
           
           
         
        var videoActualWidth = $("#indepth_video").width();
        var videoActualHeight = $("#video1").offsetHeight;
        
        console.log(videoActualWidth);
              
        var ratio =  videoActualWidth / videoActualHeight;  
        
        console.log(ratio);       
         
        if ((window.innerWidth / window.innerHeight) < ratio){
          console.log("true");
           
              
            if (videoActualWidth > window.innerWidth){
              
                var ajuste = (window.innerWidth - videoActualWidth)/2;
				console.log(ajuste);
                
                $("#video").css("left",ajuste+"px");          
            }
          
        }
        else{ 
          console.log("false");
            video.setAttribute("style", "width: 100%");
            video.setAttribute("style", "height: auto");
            video.setAttribute("style", "left: 0");
  
        }
          
    }


$(document).ready(function(){
	 $("#video1").css( "height",window.innerHeight ? window.innerHeight : $(window).height());
	
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	 var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	
	$(".vimeoFrame").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-0)+"px"	
	});
	
	$(".vimeo").css({
		"width": (ventana_ancho+150)+"px",
		"height": (ventana_alto+120)+"px"	
	})
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
		
	$('#indepth_container').fullpage({
		anchors: ['cover','pregunta1','pregunta2','pregunta3','Adidas','pregunta4','pregunta5','pregunta6','pregunta7'],
	    scrollOverflow: true,
	    scrollbar: true,
	    slideSelector: '.section',
	    slidesNavigation: false,
	    controlArrows: false,
	    scrollingSpeed: 1000,
	    afterLoad: function(anchorLink, index){

            
        }
    });
    $("#indepth_resultados").css({
	"width":ventana_ancho+"px",
	"height":ventana_alto+"px"
});

$(".indepth_boton").click(function(){
	
	if(!disable){
		console.log(tenis_data);
		var fornm_t= $('form').serializeArray();
		$.each(fornm_t, function(i,pregunta){
			if(i>2 && i<6){
				jugadores_num[pregunta["value"]]=parseInt(jugadores_num[pregunta["value"]])+1;
			}
		});
		
		var ord_jug=null;
		
		var listKeys = [];
		for(x in jugadores_num) listKeys.push(x);
		console.log(listKeys); 
		
		for(i=0;i<listKeys.length;i++){
			if(ord_jug==null){
				ord_jug=listKeys[i];
			}else{
				if(jugadores_num[listKeys[i]]>jugadores_num[ord_jug]){
					ord_jug=listKeys[i];
				}
			}
			
		}
		
		var text_tweet="goles: "+$("input[name=goles_anotados]").val()+" goleador: "+$("input[name=goleador]").val();
		var tweet_url="https://twitter.com/intent/tweet?url=http%3A%2F%2Froidersp.github.io%2Fadidas-quiz%2F&related=juanfutbol,adidasMX&hashtags=test&text="+encodeURIComponent(text_tweet);
		
		$("#link_tweet").attr("href",tweet_url);

		$("#indepth_resultados").addClass("j_"+ord_jug);
		$("#jugador_name").html(jugadores_nombres[ord_jug]);
		
		$(".indepth_tenis_text").html(jugadores_descripcion[ord_jug]);
		
		$("#indepth_resultados").css("position","fixed");
		$("#indepth_return").show();
		
		$.fn.fullpage.moveTo("cover");
		$.fn.fullpage.destroy("all");
		
		$("body").css({
			height:"100%",
			overflow: "hidden"
		})
	}else{
		
		var v={"pregunta1":false,"pregunta2":false,"pregunta3":false,"pregunta4":false,"pregunta5":false,"pregunta6":false};
		$("input:radio").each(function(){
			if($(this).is(":checked")){
				v[$(this).attr("name")]=true;
			}
		});
		
		$.each(v, function(i,item){
			if(!item){
				$.fn.fullpage.moveTo(i);
				return false;
			}
		});
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
	
	bgadj();
	
});


$(window).on("resize", function(){
	
	 var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	
	$(".vimeoFrame").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-0)+"px"	
	});
	
	$(".vimeo").css({
		"width": (ventana_ancho+150)+"px",
		"height": (ventana_alto+120)+"px"	
	})
	 $("#indepth_resultados").css({
	"width":ventana_ancho+"px",
	"height":ventana_alto+"px"
});
	 
	 });


