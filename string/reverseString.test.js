const reverseString=require('./reverseString')

test('reverse string checking',()=>{
    expect(reverseString).toBeDefined();
});

test('string reverse',()=>{
    expect(reverseString('hello')).toEqual('olleh')
})