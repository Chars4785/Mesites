import React from 'react'
import _ from 'lodash'
import axios from 'axios'

class RequestAPI{
    rqGogoxing = async () =>{
        try {
            const formData = new FormData();
            formData.append('type', 'SCOOTER');
            formData.append('latSW', 12);
            formData.append('lngSW', 87);
            formData.append('latNE', 63);
            formData.append('lngNE', 165);
            const { data } = await axios({
                url: 'http://api.gogo-ssing.com/ss/api/mob/search.do',
                method: 'POST',
                data: formData,
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data'
                }
              })
            return data;
        } catch ({ response }) {
            return response;
        }
    }
//
    rqXingxing = async ({latitude,longitude}) =>{
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImF1dGhJZCI6ImhvbmV5YmVlcyIsInVzZXJJZCI6ImhvbmV5YmVlcyIsInJvbGVzIjpbImFwcHhpbmd4aW5nIl19LCJpYXQiOjE1NTUzMzQ3MjMsImV4cCI6ODY1NTU1MzM0NzIzfQ.br5PT0s_vkFFs24Dxv0acPeQizg_TpXtkdEaWRgkSMw';
        try{
            const { data } = await axios({
                // url: `https://api.xingxingmobility.com/api-xingxing/v1/scootersforapp?latitude=37.497723888568&longitude=127.02577935531735`,
                url: `https://api.xingxingmobility.com/api-xingxing/v1/scootersforapp?latitude=${latitude}&longitude=${longitude}`,
                method: 'GET',
                headers: {'Authorization': "Bearer " + token},
              })
            return data;
        }catch({response}){
            return response;
        }
    }

    rqLime = async () =>{
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiTlJYTVdJWks2SUxaNyIsImxvZ2luX2NvdW50IjoyfQ.mAIIlHRLIjMYx2Trv19AucgBB5HqcmN9XF6paXoFfGk'
        try{
            const { data } = await axios({
                // url: `https://api.xingxingmobility.com/api-xingxing/v1/scootersforapp?latitude=37.497723888568&longitude=127.02577935531735`,
                url: `https://web-production.lime.bike/api/rider/v1/views/map?ne_lat=37.530970983783654&ne_lng=127.04018332064152&sw_lat=37.5019605355694&sw_lng=127.01729234308004&user_latitude=37.5571517&user_longitude=126.920715&zoom=14.754707336425781`,
                method: 'GET',
                headers: {'Authorization': "Bearer " + token},
              })
            return data;
        }catch({response}){
            return response;
        }
    }
    
    rqKickgoing = async ({latitude,longitude,zoom}) =>{
        try{
            const { data } = await axios({
                url: `http://api.kickgoing.io/v2/kickscooters/ready/list?lat=${latitude}&lng=${longitude}&zoom=${zoom}`,
                method: 'GET',
              })
            return data;
        }catch({response}){
            return response;
        }
    }

}
const requestApI = new RequestAPI();
export default requestApI;






// import axios from 'axios';

// export default async function Request(name,range){
//     const {from,to} = range;
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImFjY291bnRJZCI6IjVkN2YxMjE2NjYwMDk0MDAxMzQxODhlMSIsInVzZXJJZCI6ImphZWh1bnBhcmsiLCJyb2xlcyI6WyJoYnN0YWZmIl0sInJlZnMiOnsic3RhZmZJZCI6IjVkN2YxMjE2YWU5MDQ4M2YyZDkxYzZmNiJ9fSwiZXhwIjoxNTcyOTQ4Nzg1LCJpYXQiOjE1NzI4NjIzODV9.1mms88fu60H4VHqd0s2YkGXt3Ch3PI2fS7NxbZc_uBQ";

//     try{
//         const result = await axios(`http://localhost:4100/api-sts/v1/stats/externscooteronload?from=${from}&to=${to}&kind=${name}`,{
//             method: 'GET',
//             headers: {'Authorization': "Bearer " + token},
//         })
//         return result;
//     }catch( e ){
//         console.log( e );
//         //throw new Error("통신오류");
//     }
// }