<DOCTYPE html>
<html>
    <head>
        <title> Lucas - Pop-ups</title>
        <meta charset="utf-8">
        <style>
           .popup {
               position: fixed;
               top: 0; bottom: 0;
               left: 0;  right: 0;
               margin: auto;
               width: 300px;
               height: 180px;
               padding: 15px;
               border: solid 1px #4c4d4f;
               background: #f5812a;
               display: none;

           }

        </style>
        <script type="text/javascript">

            function abrir() {
                document.getElementById('popup').style.display = 'block' ;
            }
            function fechar() {
                document.getElementById('popup').style.display = 'none' ;
            }

            <input id="popup" type="text" value="texto" />
        </script>
    </head>
    <body>
        <div  id="popup"  class="popup">
          
            <p>Olá André</p>

        </div>

            <a href="javascript: abrir();"> abrir pop-up </a>
            <a href="javascript: fechar();"> fechar pop-up </a>
           
     </body>
</html>