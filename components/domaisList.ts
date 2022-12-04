const domainList:string[]=['gmail.com','outlook.com','hotmail.com','aim.com','yahoo.com','icloud.com',
    'pm.com','zoho.com','yandex.com','gmx.com','titan.email','hubspot.com','tutanota.com']

export const checkDomain=(email:string)=>{
    let index=email.indexOf('@')
    let domain=email.substring(index+1)

  return domainList.some(e=>e===domain)
}