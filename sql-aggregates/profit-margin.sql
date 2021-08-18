with "t1" as (
  select "filmId", "title", "description", "rating", sum("payments"."amount") as "gross" from "payments"
  join "rentals" using("rentalId")
  join "inventory" using("inventoryId")
  join "films" using("filmId")
  group by "filmId"
),
"t2" as (
  select "filmId", sum("films"."replacementCost") as "cost" from "films"
  join "inventory" using ("filmId")
  group by "filmId"
)
select "t1"."title", "t1"."description", "t1"."rating", ("t1"."gross" - "t2"."cost") as "profit" from "t1"
  join "t2" using ("filmId")
  order by "profit" desc;


/*
select "films"."title", sum("payments"."amount") as "gross" from "payments"
  join "rentals" using("rentalId")
  join "inventory" using("inventoryId")
  join "films" using("filmId")
  group by "filmId" order by "gross" desc;

select "films"."title", sum("films"."replacementCost") as "cost" from "films"
  join "inventory" using ("filmId")
  group by "filmId"
  order by "cost" desc;
*/
