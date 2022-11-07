const stuff: (string | number) [] = [1, 'asd']

const color: number []= [23,22,21]

const color2: [number, number, number] = [255,0,255]     //acts like a rigid array only three #

type HttpResponse = [number, string];
  const goodRes: HttpResponse = [200, 'great']    //rigid array.. must be in order

  goodRes.push(123)  //overflow, dont do this
  goodRes.pop()    // 
  goodRes.pop()
  goodRes.pop()   //array is now empty. not following the rules

//alternate code


{
    code: 200;
    msg: 'great';
}

const responses: HttpResponse [] = [[404, 'not found'],[200, "ok"],]
