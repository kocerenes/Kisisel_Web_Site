<?php

session_start();
ob_start();

if(($_POST['kullaniciAd']=="g191210080@sakarya.edu.tr" and ($_POST['password']=="g191210080")))
{
  $_SESSION["login"]="true";
  $_SESSION["kullaniciAd"]="g191210080@sakarya.edu.tr";
  $_SESSION["password"]="g191210080";

  echo "Hoşgeldiniz g191210080";
  header("Refresh:2; url=../anasayfa/index.html");
}

elseif(($_POST['kullaniciAd']=="" or ($_POST['password']=="")))
{
  echo "Kullanıcı adı ya da şifreyi boş bırakmayınız.";
  header("Refresh:1; url=index.php");
}

elseif(($_POST['kullaniciAd']!="g191210080@sakarya.edu.tr" or ($_POST['password']!="g191210080")))
{
  echo "Kullanıcı adı ve şifre yanlış.";
  header("Refresh:1; url=index.php");
}


ob_end_flush();

?>