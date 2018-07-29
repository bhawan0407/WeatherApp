console.log('Starting app');


setTimeout(() => 
{
    console.log('set Timeout callback');
}, 2000);


setTimeout( () => 
{
    console.log('setTimeOut2 callback');
}, 0);

console.log('Finishing app');
