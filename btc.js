var CoinKey = require('coinkey')

const min = 0x2126875fd00000000
const max = 0x3ffffffffffffffff

const wallets = ['13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so',
'1BY8GQbnueYofwSuFAT3USAhGjPrkxDdW9',
'1BY8GQbnueYofwSuFAT3USAhGjPrkxDdW9',
'18aNhurEAJsw6BAgtANpexk5ob1aGTwSeL',
'18192XpzzdDi2K11QVHR7td2HcPS6Qs5vg',
'1LuUHyrQr8PKSvbcY1v1PiuGuqFjWpDumN',
'13Q84TNNvgcL3HJiqQPvyBb9m4hxjS3jkV',
'14u4nA5sugaswb6SZgn5av2vuChdMnD9E5',
'19z6waranEf8CcP8FqNgdwUe1QRxvUNKBG',
'14JHoRAdmJg3XR4RjMDh6Wed6ft6hzbQe9',
'1FTpAbQa4h8trvhQXjXnmNhqdiGBd1oraE'
]
// 
let key = BigInt(min)

console.log(key)

while(true){

    key = key + BigInt(parseInt(1))
    pkey = key.toString(16)
    while (pkey.length < 64){
        pkey = '0' + pkey
    }

    public = generatePublic(pkey)
    console.log(pkey)
    console.log(public)
    for (i=0;i<wallets.length;i++){
        if (public == wallets[i]){
            throw 'ACHEI!!!! 🎉🎉🎉🎉🎉'
        }
    }
}


function generatePublic(privateKey){
    _key = new CoinKey(new Buffer(privateKey, 'hex'))
    _key.compressed = true
    return _key.publicAddress
}