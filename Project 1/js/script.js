

var cup1Price = 10.50;
 var  cup1PriceEl = document.getElementById('cup1Price');
 cup1PriceEl.textContent = cup1Price.toFixed(2);

var cup2Price = 15.99;
 var  cup2PriceEl = document.getElementById('cup2Price');
 cup2PriceEl.textContent = cup2Price.toFixed(2);
  
 var cup3Price = 1699.00;
 var  cup3PriceEl = document.getElementById('cup3Price');
 cup3PriceEl.textContent = cup3Price.toFixed(2);

 var cup4Price = 59.78;
 var  cup4PriceEl = document.getElementById('cup4Price');
 cup4PriceEl.textContent = cup4Price.toFixed(2);

 var cup5Price = 105.56;
 var  cup5PriceEl = document.getElementById('cup5Price');
 cup5PriceEl.textContent = cup5Price.toFixed(2);

 var cup6Price = .99;
 var  cup6PriceEl = document.getElementById('cup6Price');
 cup6PriceEl.textContent = cup6Price.toFixed(2);

 var tax = 0.06,
        total = cup1Price + cup2Price + cup3Price + cup4Price + cup5Price + cup6Price,
        subTotal = total * tax,
        totalEl = document.getElementById('total'),
        taxEl = document.getElementById('tax'),
        subTotalEl = document.getElementById('subTotal');
  
    taxEl.textContent = tax.toFixed(2);
    totalEl.textContent = total.toFixed(2);
    subTotalEl.textContent = subTotal.toFixed(2);
  
     