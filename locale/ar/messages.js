module.exports={languageData:{"plurals":function(n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n100=t0&&s[0].slice(-2);if(ord)return"other";return n==0?"zero":n==1?"one":n==2?"two":n100>=3&&n100<=10?"few":n100>=11&&n100<=99?"many":"other"}},messages:{"The value is {value}":function(a){return["[AR] The value is ",a("value")]},"The double value is {double}":function(a){return["[AR] The double value is ",a("double")]},"Hello {name}!":function(a){return["[AR] Hello ",a("name"),"!"]},"Increment":"[AR] Increment","Decrement":"[AR] Decrement","{0, plural, one {# item} other {# items} =3 {There are exactly # items}}":function(a){return["[AR] ",a("0","plural",{one:["#"," item"],other:["#"," items"],3:["There are exactly ","#"," items"]})]},"Current date:":"[AR] Current date:","Number format:":"[AR] Number format:","Default text":"[AR] Default text"}};