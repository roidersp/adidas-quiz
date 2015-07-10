var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="eb9e0a21-b911-430e-9591-57d10d52a9e2";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var num_carrusel=0;
var tenis_data={"x":0,"ace":0};
var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();
var disable=true;


$("#indepth_resultados").css({
	"width":ventana_ancho+"px",
	"height":ventana_alto+"px"
});

$(".indepth_boton").click(function(){
	if(!disbble){
		$("#indepth_resultados").css("position","fixed");
	}
	
	
	});

$(".indepth_tenis input[type=radio]").on("change",function(){
	if($(".indepth_tenis input[name=pregunta1]").is(":checked") && $(".indepth_tenis input[name=pregunta2]").is(":checked") && $(".indepth_tenis input[name=pregunta3]").is(":checked")){
		tenis_data[$(".indepth_tenis input[name=pregunta1]").attr("value")]=parseInt(tenis_data[$(".indepth_tenis input[name=pregunta1]").attr("value")])+1;
		tenis_data[$(".indepth_tenis input[name=pregunta2]").attr("value")]=parseInt(tenis_data[$(".indepth_tenis input[name=pregunta2]").attr("value")])+1;
		tenis_data[$(".indepth_tenis input[name=pregunta3]").attr("value")]=parseInt(tenis_data[$(".indepth_tenis input[name=pregunta3]").attr("value")])+1;
		
		if(tenis_data["ace"]>tenis_data["x"]){
			$(".adidas_ace").css("display","block");
			$(".indepth_image_tenis").addClass("m_ace");
		}else{
			$(".adidas_x").css("display","block");
			$(".indepth_image_tenis").addClass("m_x");
		}
		
		$(".indepth_boton").removeClass("disable");
		
		disable=false;
		$(".indepth_aviso").hide();
	}
	
	

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


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();

		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
		
		$('#indepth_container').fullpage({
		anchors: ['cover','pregunta1','pregunta2','pregunta3','pregunta4','pregunta5','pregunta6','pregunta7'],
	    scrollOverflow: true,
	    scrollbar: true,
	    slideSelector: '.section',
	    slidesNavigation: false,
	    controlArrows: false,
	    scrollingSpeed: 1000,
	    afterLoad: function(anchorLink, index){

            
        }
    });
});


