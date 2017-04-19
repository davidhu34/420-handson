library(Imap)
library(arulesViz)
library(ibmdbR)

con <- idaConnect('BLUDB','','')
idaInit(con)
met<-idaQuery("SELECT ID,LAT,LONG FROM METEOR_LANDINGS")
met <- head(met,length(met[,1]))


m<-met
m$count<-1
m$ID<-NA
m<-aggregate(count~LONG+LAT,data=m,FUN=sum)

city <- idaQuery("SELECT CITY,LAT,LNG FROM WORLD_CITIES" )
city <- head(city, length(city[,1]))



city$sum<-c(0)
`%+=%` = function(e1,e2) eval.parent(substitute(e1 <- e1 + e2))

dist<-function(a){
  return(gdist(as.numeric(city$LNG),as.numeric(city$LAT),as.numeric(a[1]),as.numeric(a[2]),units = "km"))
}

Tag<-apply(m,1,dist)



city$sum<-apply(Tag,1,FUN = function(x){

  return(sum(as.numeric(m[x,]$count)))
}
)
