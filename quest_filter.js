window.addEventListener('DOMContentLoaded', function(e){
    var c=["rank","bet","loc","rui","mon","zok","jou"]; /* ここにクラスを追加する */
    [].forEach.call(document.querySelectorAll(c.map(function(x){
      return "."+x;
    }).join(",")),function(x){
      x.addEventListener('change',function(e){
        var search={};
        c.forEach(function(x){
          search[x]=[].map.call(document.querySelectorAll('[type=checkbox].'+x+':checked'),function(x){
            return x.value;
          });
        });
        var len={};
        var reg={};
        Object.keys(search).forEach(function(x){
          len[x]=search[x].length;
          reg[x]=new RegExp(search[x].join("|"));
        });
        [].forEach.call(document.querySelectorAll('#t1 tbody tr'),function(x){
          var flg=c.map(function(y){
            if(len[y]==0) return true;
            return x.querySelector('td.'+y).textContent.match(reg[y])?true:false;
          }).filter(function(y){
            return !y;
          }).length>0;
          flg?x.classList.add("hide"):x.classList.remove("hide");
        });
      });
    });
  });