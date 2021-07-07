let obj = {
    number: [],
    string: [],
    boolean: []
};


let arr = ['a', 1, 2, false, 'b'].forEach((element) => {
    if (typeof element === 'number'){
        obj.number += elementment;
    } 
    else{
        if (typeof element === 'string'){
            obj.string += element;
        }
        else {
            obj.boolean += element;
        }
    });
console.log(obj);