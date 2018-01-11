function setup() {

    let a = [1,1,3,4,5,6,7,8,9,10];
    let korrekt = false;

    for (i = 0; i < a.value; i++)
    {
        if(a.value > 0 && a[0]===a[1])
        {
            korrekt = true;
            
        }
        else
        {
            korrekt = false;
            
        }
    }
    return korrekt;
}