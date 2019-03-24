module.exports = function solveSudoku(matrix) {

    let arr = [1,2,3,4,5,6,7,8,9]
    workMatrix = matrix;
    obj = {};
    count = 0; 
    count2 = 0; 
    let tempC ;
    let f = 50
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(workMatrix[i][j] == 0){
                count++;   
            }
        }
    }

    function solve(workMatrix){
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(workMatrix[i][j] == 0){
                    count2++
                       
                                 
                    if(!obj.hasOwnProperty([i])){ 
                            obj[i] = {}   
                          
                    
                             
                    }
                    if(obj.hasOwnProperty([i])){
                        if(!obj[i].hasOwnProperty([j])){
                            obj[i][j] = arr.slice();
                            // console.log('create'+ ' ' + i + ' ' +j)
                        }
                    }
                  

                   
                    if(obj.hasOwnProperty([i]) && obj[i].hasOwnProperty([j])){
                        if(count2 > count){
                            
                            workMatrix[i][j] =  obj[i][j][0];
                            count--;    
                            tempC = count;  
                            count2 = 0;  
                        }
                                         
                        checkRow(workMatrix,i,j);
                        checkCol(workMatrix,i,j);
                        checkSegment(workMatrix,i,j);
                      
                        if(obj[i][j].length == 1){
                          
                            workMatrix[i][j] = obj[i][j][0];
                           
                            count--;    
                            tempC = count;  
                            count2 = 0;     
                                
                            delete obj[i][j];
                            
                        }
                    
                    } 
                             
                } else {
                    continue;
                }
            }
        }

      
        f--
    if (f != 0){
        return solve(workMatrix)
       
    } else {
        return
      
    }
       
   
    }


    function checkRow(workMatrix,i,j){
       
        for(let k = 0; k < 9; k++){
                for(let t = 0; t < 9; t++){
                    if(workMatrix[i][k] ==  obj[i][j][t]){
                        obj[i][j].splice(t, 1)    
                }
            }
            
        }
    }

    function checkCol(workMatrix,i,j){
        for(let k = 0; k < 9; k++){
            for(let t = 0; t < 9; t++){
                if(workMatrix[k][j] ==  obj[i][j][t]){
                    obj[i][j].splice(t, 1)    
            }
        }
        
    }
}
    function checkSegment(workMatrix,i,j){

        if(i >= 0 && i <= 2 && j >= 0 && j <= 2 ){          
            for(let k = 0; k < 3; k++){
                for(let t = 0; t < 3; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        } 
         else if(i > 2 && i <= 5 && j >= 0 && j <= 2){
            for(let k = 3; k < 6; k++){
                for(let t = 0; t < 3; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }
        else if(i > 5 && i <= 8 && j >= 0 && j <= 2){
            for(let k = 6; k < 9; k++){
                for(let t = 0; t < 3; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }

        else if(i >= 0 && i <= 2 && j > 2  && j <= 5 ){
            for(let k = 0; k < 3; k++){
                for(let t = 3; t < 6; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }
        else if(i > 2 && i <= 5 && j > 2 && j <= 5 ){
            for(let k = 3; k < 6; k++){
                for(let t = 3; t < 6; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }
        else if(i > 5 && i <= 8 && j > 2 && j <= 5 ){
            for(let k = 6; k < 9; k++){
                for(let t = 3; t < 6; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }

       else  if(i >= 0 && i <= 2 && j > 5  && j <= 8 ){
            for(let k = 0; k < 3; k++){
                for(let t = 6; t < 9; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }
        else if(i > 2 && i <= 5  && j > 5  && j <= 8 ){
            for(let k = 3; k < 6; k++){
                for(let t = 6; t < 9; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }
        else  if(i > 5 && i <= 8 && j > 5  && j <= 8){
            for(let k = 6; k < 9; k++){
                for(let t = 6; t < 9; t++){
                    for(let z = 0; z < 8; z++){
                        if(workMatrix[k][t] == obj[i][j][z] ){
                            obj[i][j].splice(z, 1)   
                        }
                    }
                }
            }
        }        

    }


   
    solve(workMatrix)
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(workMatrix[i][j] == 0){
                document.write('<br>'+ obj[i][j])   
            }
        }
    }

    // // console.log(obj[0][7]);
    // // console.log(obj[0][8]);

  
    // document.write('<br>'+ in_val)
    return workMatrix        
  }



