function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId;
    // ~~~ Type 'HTMLElement | null' is not assignable to type 'HTMLElement'
  } else if (elOrId === null) {
    return document.body;
  }
  elOrId
  // ^? (parameter) elOrId: string
  return document.getElementById(elOrId);
  // ~~~ Type 'HTMLElement | null' is not assignable to type 'HTMLElement'
}


function getElement2(elOrId: string|HTMLElement|null): HTMLElement {
  if (elOrId === null) {
    return document.body;
  } else if (typeof elOrId === 'object') {
    return elOrId;
    //     ^? (parameter) elOrId: HTMLElement
  }
  const el = document.getElementById(elOrId);
  //                                 ^? (parameter) elOrId: string
  if (!el) {
    throw new Error(`No such element ${elOrId}`);
  }
  return el;
  //     ^? const el: HTMLElement
}


//In this code, for example, there are three distinct variables all named i:
let i = 0;
for (let i = 0; i < 10; i++) {
  console.log(i);
  {
    let i = 12;
    console.log(i);
  }
}
console.log(i);


/** 
 * In VS Code, if you click an i in the for loop and hit F2, a text box will pop
up that lets you put in a new name.

Language services can also help you navigate through both your own code
as well as external libraries and type declarations.
*/
let i1 = 0;
for (let i2 = 0; i2 < 10; i2++) {
  console.log(i2);
  {
    let i3 = 12;
    console.log(i3);
  }
}
console.log(i1);



declare function fetch(
  input: RequestInfo | URL, init?: RequestInit
): Promise<Response>;



interface Request extends Body {
  // ...
}
declare var Request: {
  prototype: Request;
  new(input: RequestInfo | URL, init?: RequestInit | undefined): Request;
};


interface RequestInit {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  // ...
}
