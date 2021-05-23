<!DOCTYPE html> 
<html>
   <header> 
      <?php 
         if(isset($_POST['submit'])){ 
            $_isim=$_POST['isim']; 
            $_soyisim=$_POST['soyisim'];
            $_mail=$_POST['email']; 
            $_telefon=$_POST['tel'];
            $_sebep=$_POST['hatalar']; 
            $_sube=$_POST['subeler'];
            $_mesaj=$_POST['mesaj'];
            $radio_value = $_POST["gender"];
            echo "Ad: $_isim <br> Soyad: $_soyisim <br> E-mail: $_mail <br> Telefon no: $_telefon<br>İletişim sebebi: $_sebep <br> Şube: $_sube<br>Mesaj: $_mesaj <br> Cinsiyet: $radio_value <br>"; 
            echo "<style type='text/css'> #form_kutusu{ display:none; } </style>"; 
         }

         echo "Ulaşım yolu:";
         if(isset($_POST['ulasim1'])){
            echo " E-mail,";
         }

         if(isset($_POST['ulasim2'])){
            echo " Telefon,";
         }

         if(isset($_POST['ulasim3'])){
            echo " Fax";
         }
      ?> 

   </header>
   <body>

   </body>
</html>