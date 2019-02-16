import { Injectable } from '@angular/core';

@Injectable()
export class MaleService {
public get ()
  {
    let r=[
      {name:"rahul",gender:"Male"},
      {name:"kaun",gender:"female"},
      {name:"Here",gender:"female"},
      {name:"Wow",gender:"Male"},
      {name:"kam",gender:"transgender"},
      {name:"dan",gender:"Male"},
      {name:"gon",gender:"transgender"}
    ];
    return r;
  }

}
