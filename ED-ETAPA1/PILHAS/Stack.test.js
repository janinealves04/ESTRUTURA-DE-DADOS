import Stack from "./3-pilhaRevision"
test ("Testar método push", ()=>{
    //asserções
    const stack = new Stack();
    stack.push(1);
    expect(stack.size()).tobe(1);
    expect(stack.peek()).tobe(1);
})