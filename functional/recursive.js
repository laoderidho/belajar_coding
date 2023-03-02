const countdown = start=>{
    console.log(start)

    if(start >0) countdown(start - 1)
}

countdown(10)