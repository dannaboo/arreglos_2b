function esVocal (vocal){
    switch (vocal) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            console.log('True')
            break;
    
        default:
            console.log(false)
            break;
    }
}
esVocal('i')
