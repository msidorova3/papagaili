<script>
  
  var skaits = window.prompt("Lūdzu ievadiet papagaiļu skaitu! ");
  var maksa = window.prompt("Lūdzu ievadiet vienas barības pakas maksu!");
  var dienas = window.prompt("Uz cik dienām pietiek barības no šīs pakas?");
  var biezums = window.prompt("Cik reizes dienā tiek barots putns?");
  
  var sum;
  sum = ((365 / dienas) * maksa)*skaits;
  
alert("Kopējas izmaksas par barību gadā:" + sum.toFixed(2)  + "€");

        </script>
