msg.headers = {
    "Content-Type": "application/json"
};
const columns = [
  {
    "key": "score",
    "type": "numeric",
    "goal": "max",
    "full_name": "Twitter Score",
    "is_objective": true
  },
  {
    "key": "max_avg",
    "type": "numeric",
    "goal": "max",
    "full_name": "MAX temp avg",
    "is_objective": true
  },
  {
    "key": "min_avg",
    "type": "numeric",
    "goal": "max",
    "full_name": "MIN temp avg",
    "is_objective": false
  },
  {
    "key": "lat",
    "type": "numeric",
    "goal": "max",
    "full_name": "latitude",
    "is_objective": false
  },
  {
    "key": "lng",
    "type": "numeric",
    "goal": "max",
    "full_name": "longitude",
    "is_objective": true
  },
];
const options = msg.payload.map( (e, i) => {
    return {
        key: i+1,
        name: e.NAME,
        values: {
            name: e.NAME,
            max_avg: Number(e.MAX_AVG) || 0,
            min_avg: Number(e.MIN_AVG) || 0,
            score: Number(e.SCORE) || 0,
            lat: Number(e.LAT) || 0,
            lng: Number(e.LNG) || 0
        },
        description_html: ''
    }
});
const problem = {
  "subject": "tavel",
  "columns": columns,
  "options": options
};
msg.payload=JSON.stringify(problem);
return msg;
