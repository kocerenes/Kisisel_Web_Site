<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

    <title>Giriş Yap</title>
</head>
<body>

<nav>
        <div class="container clearfix">
            
            <div id="nav-links">
                <ul>
                    <li class="nav-item">
                        <a href="../index.html" class="nav-link text-uppercase">
                            Anasayfa
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../sehrimiz/index.html" class="nav-link text-uppercase">
                            şehrimiz
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../takimimiz/index.html" class="nav-link text-uppercase">
                            takımımız
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../hava_durumu/index.html" class="nav-link text-uppercase">
                            Hava Durumu
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../ozgecmis/index.html" class="nav-link text-uppercase">
                            özgeçmiş
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../iletisim/index.html" class="nav-link text-uppercase">
                            iletişim
                        </a>
                    </li>

                    <div class="right">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-uppercase kenarlik">
                                giriş yap
                            </a>
                        </li>
                    </div>                
                    
                </ul>
            </div>
        </div>
    </nav>



    <form action="dogrulama.php" method="POST">
        <div class="form">
        <h3>Giriş Yap</h3>
            <input class="info" type="text" name="kullaniciAd" placeholder="Kullanıcı adınızı giriniz.." value=""><br>
            <input class="info" type="password" name="password" placeholder="Şifre giriniz.." value=""><br>
            <input type="submit" name="button" value="Giriş">
        </div>  
    </form>


    <footer >
        <div class="d-inline-block f-div-l">
            <p class="text">Produced by Enes Koçer </p>
        </div>

        <div class="d-inline-block f-div-c">
            <p class="text">2021 Mayıs</p>
        </div>

        <div class="d-inline-block f-div-r">
            <a href="#"><p class="text">Sayfa başına git -> </p></a>
        </div> 
    </footer>
    
</body>
</html>