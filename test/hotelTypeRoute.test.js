const supertest = require("supertest");
const app = require("../www/index");

describe("Check all hotel Type route is correct or not", () => {
  it("First check the Creation is correct", async () => {
    const result = await supertest(app).post("/hotelTypes").send({
      "name": "s",
      "code": 200,
    });

    expect(result.status).toBe(201);
    expect(result.body).toEqual({
      name: "s",
      code: 200,
    });
  });

  it("If validation is error in name", async () => {
    const result = await supertest(app).post("/hotelTypes").send({
      "code": 200
    });
    expect(result.status).toBe(204);
  });

  it("If validation is error in code", async () => {
    const result = await supertest(app).post("/hotelTypes").send({
      "name":"sa"
    });
    expect(result.status).toBe(204);
  });

  it('if hotelType data is found', async()=>{
      const result = await supertest(app).get('/hotelTypes');
      expect(result.status).toBe(200)
      expect(result.body).toEqual({'data':[]})
  })

  it('Successfully Find a hotelType by id', async()=>{
      const result = await supertest(app).get('/hotelTypes/2');
      expect(result.status).toBe(200)
      expect(result.body).toEqual({'data':{'id':2, "code":200, "name":"r"}});
     
  });

//   it('Fail to Find a hotelType by id', async()=>{
//     const result = await supertest(app).get('/hotelTypes/2');
//     expect(result.status).toBe(204)
//     expect(result.body).toEqual({'data':{}})
//   })


  it('successfully update hotelType', async()=>{
    const result = await supertest(app).put('/hotelTypes/2').send({  name: "s",
    code: 200 });
    expect(result.status).toBe(200)
    expect(result.body).toEqual({'data':{  name: "s",
    code: 200}})
  })

  it('successfully deleted hotelType', async()=>{
    const result = await supertest(app).delete('/hotelTypes/2')
    expect(result.status).toBe(200)
    expect(result.body).toEqual({'mes':"Successfully deleted."})
  })


});
