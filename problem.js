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
        name: e.city,
        values: {
            max_avg: e.MAX_AVG || 0,
            min_avg: e.MIN_AVG || 0,
            score: e.SCORE || 0,
            lat: e.LAT || 0,
            lng: e.LNG || 0
        },
        description_html: ''
    }
})
const problem = {
  "subject": "tavel",
  "columns": columns,
  "options": options
};
msg.problem=JSON.stringify(problem);
return msg;
