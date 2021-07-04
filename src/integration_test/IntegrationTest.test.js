import moxios from 'moxios';
import axios from 'axios';
import {fetchApiData} from './../actions/ApiData.actions.js';
import { checkStore } from './../utils/TestUtils.js';

const api = `http://api.openweathermap.org/data/2.5/weather?q=perth&appid=2677aa551e49ce368f3566232b7909af`

describe("Tests for API", () => 
{
    beforeEach(()=>{moxios.install();});
    afterEach(()=>{moxios.uninstall();});

    test("Check response test", (done) => 
    {
        moxios.stubRequest(api, {status: 200, response:{"success": true}})

        axios.get(api, {"success": true }).then(response => 
        {
            expect(response.status).toBe(200);
            done();
        });
    });
});

/*describe('action to fetch API data test', ()=>
{

    beforeEach(()=>{moxios.install();});
    afterEach(()=>{moxios.uninstall();});

    test('update store test', ()=>
        {
            const myState=
            {
                country: 'test Country', 
                description: 'test Description', 
                feels_like: 281.39, 
                humidity: 86, 
                icon: "02d",
                id: 234,
                name: "test Name",
                pressure: 1028, 
                temp: 282.97, 
                temp_max: 285.19, 
                temp_min: 280.25, 
            }
            const store = checkStore();

            moxios.wait(()=>
            {
                const req = moxios.requests.mostRecent();
                req.respondWith({
                    status:200,
                    response:myState
                })
            });

            return store.dispatch(fetchApiData()).then(()=>
            {
                const stateResult = store.getState();
                expect(stateResult.apiData).toBe(myState);
            })
        });
});*/



