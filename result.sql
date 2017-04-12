select c.CITY as name, c.LAT as lat, c.LNG sa lng, m.SUM,
 w.min_avg, w.max_avg, t.score
from WORLD_CITIES c
left join METEOR_SUM m on c.CITY = m.CITY
left join (
    select CITY, avg(MIN_TEMP) as min_avg, avg(MAX_TEMP) as max_avg
    from CITY_TEMP group by CITY
) w on c.CITY = w.CITY
left join (
    select CITY, sum(SCORE) as score
    from CITY_TWEET group by CITY
) t on c.CITY = t.CITY;
