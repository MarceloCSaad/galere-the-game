// export function addPlayer () {
//   APP.post('/addplayer', (req,res) => {
//     console.log(req.body);
//     CONNECTION.query(QUERY_LIST.insertIntoPlayers, [
//         req.body.id,
//         req.body.name,
//         req.body.rules,
//         req.body.anger],
//       (err, results) => {
//         if(err) console.log(err);
//         else res.json(results);
//       })
//     }
//   )
// }


// APP.get('/read', (req,res)=> {
//   CONNECTION.query(SELECT_ALL_PLAYERS_QUERY, (err, results) => {
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(results);
//     }
//   })
// })
