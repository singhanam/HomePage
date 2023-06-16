const sendMail = (addresses) => {

    addresses.sort();
    const domains = new Map();
    for (const address of addresses) {
       const domain = address.split('@')[1];
       if (!domains.has(domain)) {
           domains.set(domain, address);
       }
    }
    for (const address of domains.values()) {
       sendmail(addresses);
    
    }
    
    }
    const addresses = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com', 'jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com]