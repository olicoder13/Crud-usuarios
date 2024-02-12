function camelCase(string) {
    // code here
    const cadena =  string.split('');
    console.log(cadena);
    const cadenaDevuelta = [];
    for(let i = 0; i<cadena.length; i++){
      if(cadena[i].toUpperCase() !== cadena[i]){
        cadenaDevuelta.push(cadena[i])
      }else{
        cadena.push('');
        cadena.push(cadena[i]);
      }
    }
    
    
  }
  
  console.log(camelCase("camelCase"));