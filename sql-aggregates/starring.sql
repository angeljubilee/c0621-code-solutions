select "categories"."name", count("categories"."name") from "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
  group by "categories"."name";
