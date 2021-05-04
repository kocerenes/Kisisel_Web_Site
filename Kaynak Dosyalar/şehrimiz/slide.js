//bütün resim bulan slide klaslarını aldık dizi olarak.
var slide=document.getElementsByClassName("slide");
//Yine sayfadaki bütün açılamarı dizi olarak aldık.
var aciklama=document.getElementsByClassName("aciklama");
//slider başlangıcı için bir sayaç oluşturduk ve sıfır değerini atadık.
var slideSira=0;
//Sliderin oluşturan anaDivi bir değişkenin içine atadık
var anaDiv=document.getElementsByClassName("anaDiv")[0];

/*zaman start*/
/* iki saniyede bir sliderStart fonksiyonunu çalıştırdık.*/
var zaman=setInterval(slideStart,4000);
//Mouse anadivin üzerine gelince zamansal akışı durdurduk.
anaDiv.onmouseover=function(){
	clearInterval(zaman);
	}
//Mouse üzerinden ayrılınca zaman akışını tekrardan başlattık.
anaDiv.onmouseout=function(){
	zaman=setInterval(slideStart,3000);
	}
/*zaman end*/
/*sag start*/
//Sağ butonu fantazi olsundiye dinamik olarak oluşturduk.
//Amacım bütün sliderı html yazamdanda dinamik olarak javascriptle oluşturacağımızı
//anlatabilmekti.
var sagButton=document.createElement("span");
sagButton.appendChild(document.createTextNode(">"));
sagButton.setAttribute("class","btnSag");
anaDiv.appendChild(sagButton);
sagButton.onclick=function(){slideStart();};

/*sag end*/
/*sol start*/
//Yine butonu oluşturduk. Ve her iki butonada click olduğunda çalıştıracakları fonksiyonları atadık
var solButton=document.createElement("span");
solButton.appendChild(document.createTextNode("<"));
solButton.setAttribute("class","btnSol");
anaDiv.appendChild(solButton);
solButton.onclick=function(){
	//sol buton yani geriye git denildiğinde çalışan fonsiyon
	slide[slideSira-1].style.animation="ortadanSola 1s ease";
	slide[slideSira-1].style.right="-640px";
	aciklama[slideSira-1].style.animation="aciklamaGit 1s ease";
	aciklama[slideSira-1].style.left="100%";
	slideSira-=2;
	slideSira<0 ? slideSira=slide.length-1:"";
	slideStart();
	}

/*sol end*/
//slider fonksiyonunu bir kez start ettik.
slideStart();

function slideStart(){
	//döngüsel  olarak çalışan ana fonksiyon
	
	if(slideSira!=0){
		console.log("gelecek : "+slideSira);	
		slide[slideSira-1].style.animation="ortadanSola 1s ease";
		slide[slideSira-1].style.right="-640px";
		aciklama[slideSira-1].style.animation="aciklamaGit 1s ease";
		aciklama[slideSira-1].style.left="100%";
		
		
		}
	
	slideSira>=slide.length ? slideSira=0:"";
	slide[slideSira].style.animation="sagdanOrtaya 1s ease";
	aciklama[slideSira].style.animation="aciklama 1s ease";
	slide[slideSira].style.right="0px";
	aciklama[slideSira].style.left="1em";
	slideSira++;
}

function imgGetir(index){
	slide[slideSira-1].style.animation="ortadanSola 1s ease";
	slide[slideSira-1].style.right="-640px";
	aciklama[slideSira-1].style.animation="aciklamaGit 1s ease";
	aciklama[slideSira-1].style.left="100%";
	aciklama[slideSira-1].style.animation="aciklamaGit 1s ease";
	aciklama[slideSira-1].style.left="100%";
	slideSira=index;
	slideStart();
	}