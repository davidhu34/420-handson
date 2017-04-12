library(Imap)
library(arulesViz)
library(ibmdbR)

con <- idaConnect('BLUDB','','')
idaInit(con)
#city<-c("Paris","Taipei","LosAngeles")
met<-ida.data.frame('METEOR_LANDINGS')[,c('ID','LAT','LONG')]
met <- head(met,30)

city <- ida.data.frame('WORLD_CITIES')[,c('CITY','LAT','LNG')]
city <- head(city, 30000)

city$SUM<-c(0)
`%+=%` = function(e1,e2) eval.parent(substitute(e1 <- e1 + e2))

city[gdist(as.numeric(met$LAT),as.numeric(met$LONG),as.numeric(city$LAT),as.numeric(city$LNG),units = "km")>120,4]%+=%1

city$SUM