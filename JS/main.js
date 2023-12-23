var snInput = document.getElementById('sn');
var sdInput = document.getElementById('sd');

var allSites=[];

if( localStorage.getItem('sites') != null){
      allSites = JSON.parse(localStorage.getItem('sites'));
      displyElement();
    }
function submitValue(){
   if(valdateName() && valdateUrl()){
      var sites = {
         name : snInput.value,
          visit :sdInput.value,
      }
      allSites.push(sites);
      console.log(allSites);
      localStorage.setItem('sites' , JSON.stringify(allSites));
      displyElement();
      cleAR();
   }else{
      alert(" Site name is not valid please entar a letters or numbers and more than 3 or Site URL not valid this must contain (https:// , special charcter)" );

   }
   
}
function displyElement(){
   var cartona = "";
   for(var i = 0 ; i<allSites.length ; i++){
      var inDex = i+1;
      cartona += `<tr>
      <td class="text-center">${inDex}</td>
      <td class="text-center">${allSites[i].name}</td>
      <td class="text-center visiTed"><i class="fa-regular fa-eye"></i><a href="${allSites[i].visit}" target="_blank"><button onclick="visitLink(${i})" class="btn btn-warning text-white">Visit site</button></a></td>
      <td class="text-center"><i class="fa-solid fa-trash-can"></i><button onclick="deleteElment(${i})"  class="btn btn-primary">Delete</button></td>
     </tr>`

   }
   document.getElementById('tbody').innerHTML= cartona;
}
function cleAR(){
       snInput.value= "";
       sdInput.value = "";
   
     }
     function deleteElment(x){
      allSites.splice(x , 1)
      localStorage.setItem('sites' , JSON.stringify(allSites));
      displyElement();
     }
     function visitLink(link){
      window.open(document.getElementsByTagName(a));

     }
     function valdateName(){
      var x = /^\w{3,}(\s+\w+)*$/; 
      return x.test(snInput.value);
   }
   function valdateUrl(){
         var urL = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
         return urL.test(sdInput.value);
   }
   

  






























































































































































































