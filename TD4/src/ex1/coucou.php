<?php echo "coucou"; ?>

<!--
xhr.readyState; -> 0
xhr.responseText; -> ''
xhr.open("GET","https://td3js/ex1/coucou.php",true);
xhr.readyState; -> 1
xhr.responseText; -> ''
xhr.send(null);
xhr.readyState;	-> 4
xhr.responseText; -> 'coucou'
-->


