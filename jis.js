function yo(){
    console.log("yoooo");
}

setTimeout(yo, 2000);

setTimeout(()=>{
    console.log("lag");
}, 3000);



const data= (id, nextid)=>{
    setTimeout(()=>{
        console.log(`id is ${id}`);
        if(nextid){
            nextid();
        }
    }, 2000);
}

data(1,()=>{
    data(2, ()=>{
        data(3);
    });
});

let pr= new Promise((resolve, reject)=>{
    console.log("promise");
    resolve("success");
});

const gp= ()=>{
    return new Promise((resolve, reject)=>{
        console.log('promise');
        resolve('success');
    });
};

let pr1= gp();
pr1.then(()=>{
    console.log('succesful');
});

function hello(x){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log(x);
        resolve("success");
    }, 2000);
    });
};

async function get() {
    await hello("modok");
    await hello("sama");    
}

