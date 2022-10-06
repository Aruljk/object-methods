var button=document.getElementById('but');
var list=document.getElementById('add');

var items=[
    {brand:"vivo",model:"y51",warranty:"one year",price:"18000"},
    {brand:"oppo",model:"f25",warranty:"one year",price:"25000"},
    {brand:"apple",model:"11pro",warranty:"one year",price:"40000"},
    {brand:"redmi",model:"note10",warranty:"one year",price:"16000"},
    {brand:"samsung",model:"f23",warranty:"one year",price:"14000"},
];
var mobiles=[];

function op1(){
    let mobiles=prompt();
    result=items.find(function(order){
        return order.brand===mobiles;
    });
    console.log(result);
}
button.addEventListener('click',op1);
