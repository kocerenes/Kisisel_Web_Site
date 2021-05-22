
function kontrol()
{
    var ad = document.getElementById("isim").value;
    var soyad = document.getElementById("soyisim").value;
    var email = document.getElementById("email").value;
    var telno = document.getElementById("telno").value;
    var hatalar = document.getElementById("hatalar").selectedIndex;
    var subeler = document.getElementById("subeler").selectedIndex;
    var mesaj = document.getElementById("mesaj").value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");


    if ( ad==null || ad=="" || ad.length < 2 )
    {
        alert("Ad 2 karakterden az olamaz!");
        return false;
    }

    else if ( soyad==null || soyad=="" || soyad.length < 2 )
    {
        alert("Soyad 2 karakterden az olamaz!");
        return false;
    }

    else if(email == null || email == "")
    {
        window.alert('Lütfen mail alanınızı doldurun!');
        return false;
    }

    else if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length )
    {
        alert("Geçerli bir email adresi giriniz!");
        return false;
    }

    else if ( telno==null || telno=="" || telno.length < 10 )
    {
        alert("telefon numarası 10 karakterden az olamaz!");
        return false;
    }

    else if ( hatalar==null || hatalar=="")
    {
        alert("Lütfen sorununuzu seçiniz!");
        return false;
    }

    else if ( subeler==null || subeler=="")
    {
        alert("Lütfen şube seçiniz!");
        return false;
    }
    
    else if ((form.gender[0].checked == false) && (form.gender[1].checked == false) && (form.gender[2].checked == false))
    {
        alert ( "Cinsiyet belirtiniz." );
        return false;
    }

    else if(mesaj == null || mesaj == "")
    {
        window.alert('Lütfen mesaj giriniz!');
        return false;
    }

}

//form elemanlarını temizledim
function temizle(){
    document.getElementById("form").reset();
}
