
const appConfig = require("../config/app.config")

describe('This Describe the app setting', ()=>{

    it('testing the appConfig is getting the port correctly.', ()=>{
        expect(appConfig.app.port).toBe(3000)
    });

    it('testing the db uri is correct', ()=>{
        expect(appConfig.db.url).not.toBeNull();
    });

   
   
})

